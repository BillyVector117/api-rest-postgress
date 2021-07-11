CREATE DATABASE resyapipostgres;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
)
INSERT INTO users (name, email) VALUES ("billy", "billyrm@hotmail.com")