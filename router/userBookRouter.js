import express from "express"
import { addUserBook,getAllUserBook,deleteUserBook} from "../controllers/userBookController.js"
const userBookRouter = express.Router()


userBookRouter.post("/user-book",addUserBook)
userBookRouter.get("/user-book",getAllUserBook)
userBookRouter.delete("/user-book",deleteUserBook)


export default userBookRouter