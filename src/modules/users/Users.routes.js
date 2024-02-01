const Router = require('express').Router
const catchAsync = require("../../config/catchAsync")
const UserController = require("./Users.controller")
const router = Router()

router.post("/signup", (req, res) => catchAsync(UserController.addUser(req, res)))

module.exports = router