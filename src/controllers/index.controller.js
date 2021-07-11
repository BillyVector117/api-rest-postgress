const { Pool } = require("pg");
// C:\Program Files\PostgreSQL\13\bin
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123123',
    database: 'myfirstpostgresapi',
    port: 5432
})

// http://localhost:3000/users
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users'); // async
    console.log(response.rows)
    res.status(200).json(response.rows)

}
// http://localhost:3000/users/:id
const getUserById = async (req, res) => {
    const { id } = req.params
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]); // async
    console.log(response.rows)
    res.status(200).json(response.rows)

}
// http://localhost:3000/users
const postUser = async (req, res) => {
    const { name, email } = req.body
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]) // name = $1, email = $2
    console.log(response)
    res.json({ message: "User added successfully", body: { user: name, email } })
}
// http://localhost:3000/users/:id
const updateUserById = async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body // Data form

    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]); // async
    console.log(response.rows)
    res.status(200).json(`User ${id} updated successfully`)

}
// http://localhost:3000/users/:id
const deleteUserById = async (req, res) => {
    const { id } = req.params
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]); // async
    console.log(response.rows)
    res.status(200).json(`User ${id} deleted successfully`)

}
module.exports = {
    getUsers, postUser, getUserById, deleteUserById, updateUserById
}