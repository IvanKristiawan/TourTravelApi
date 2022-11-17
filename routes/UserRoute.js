const express = require("express");
const content = require("../controllers/UserController.js");
const getUsers = content.getUsers;
const getUserLogin = content.getUserLogin;
const getUserById = content.getUserById;
const saveUser = content.saveUser;
const updateUser = content.updateUser;
const deleteUser = content.deleteUser;

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/login", getUserLogin);
router.post("/users", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
