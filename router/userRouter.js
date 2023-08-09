import express from "express"
import { getUser,getAllUser } from "../controllers/userController.js"
const userRouter = express.Router()


userRouter.get("/users",getAllUser)
userRouter.get("/users/:userId",getUser)


export default userRouter