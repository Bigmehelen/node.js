import express from "express"
const router = express.Router()

import UserController from "../controllers/UserController.js"
import { register } from "../controllers/UserController.js"

router.post("/register", register)
router.post("/login", UserController.login)

export default router