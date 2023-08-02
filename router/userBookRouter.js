import express from "express"
import { addUserBook } from "../controllers/userBookController.js"
const userBookRouter = express.Router()


userBookRouter.post("/user-book",addUserBook)


export default userBookRouter