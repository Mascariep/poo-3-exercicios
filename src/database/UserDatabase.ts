import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    public async findUsers(q: string | undefined) {
        let usersDB

        if (q) {
            const result: UserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .where("name", "LIKE", `%${q}%`)

            usersDB = result
        } else {
            const result: UserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)

            usersDB = result
        }

        return usersDB
    }

    public async findUserById(id: string) {
        const [ userDB ]: UserDB[] | undefined[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .where({ id })

        return userDB
    }

    public async insertUser(newUserDB: UserDB) {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(newUserDB)
    }

    public async updateUser(id: string, updatedUser: UserDB) {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .update(updatedUser)
            .where({ id });
        return result;
    }

    public async deleteUser(id: string) {
        try {
            const [userExists] = await BaseDatabase.connection(UserDatabase.TABLE_USERS).where({ id });

            if (userExists) {
                await BaseDatabase.connection(UserDatabase.TABLE_USERS)
                    .del()
                    .where({ id });
            } else {
                throw new Error("'id' inválida");
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
