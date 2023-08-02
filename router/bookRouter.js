import express from "express"
import { addBook,getAllBook,deleteBook } from "../controllers/bookController.js"
const bookRouter = express.Router()


bookRouter.post("/books",addBook)
bookRouter.get("/books",getAllBook)
bookRouter.delete("/books/:id",deleteBook)

export default bookRouter