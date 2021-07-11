const { Router } = require("express");
const { getUsers, postUser, getUserById, deleteUserById, updateUserById } = require("../controllers/index.controller");
const router = Router()

router.get("/users", getUsers)
router.get("/users/:id", getUserById)
router.post("/users", postUser)
router.delete("/users/:id", deleteUserById)
router.put("/users/:id", updateUserById)

module.exports = router;
