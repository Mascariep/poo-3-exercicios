import express, { Request, Response } from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

const useController = new UserController()

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
});


app.get("/users", useController.getUsers);

app.post("/users", useController.createUser);

app.put("/users/:id", useController.editUser);

app.delete("/users/:id", useController.deleteUser);