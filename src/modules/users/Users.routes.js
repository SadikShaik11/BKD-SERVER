import { Router } from 'express'
import catchAsync from "../../config/catchAsync.js"
import UserController from "./Users.controller.js"
import validate from '../../config/validation.js'
import { userValidationSchema, login } from './Users.validations.js'
const router = Router()

/**
 * 
 * @ Signup 
 * @description : signing up a new user account
 * 
 */
router.post("/signup",
    validate(userValidationSchema),
    (req, res) => catchAsync(UserController.addUser(req, res)))
/**
 * 
 * @ signIn
 * @description : signing in a new user account
 * 
 */
router.post("/login",
    validate(login),
    (req, res) => catchAsync(UserController.loginUser(req, res)))
router.get("/", (req, res) => {
    res.json({ message: 'success' })
})

export default router