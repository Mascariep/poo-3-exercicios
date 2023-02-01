export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

// tipagem para criação (POST) sem created_at
export interface UserDBPost {
    id: string,
    name: string,
    email: string,
    password: string
}
