-- Active: 1675276046992@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password)
VALUES
	("u001", "Edipo", "teste1@email.com", "123"),
	("u002", "Pamela", "teste2@email.com", "456");

SELECT * FROM users;

DROP TABLE users;


