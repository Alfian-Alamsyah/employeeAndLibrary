import express, { json }  from "express";
import employeeRouter from "./router/employeeRouter.js";
import bookRouter from "./router/bookRouter.js";
import authRouter from "./router/authRouter.js";
import userBookRouter from "./router/userBookRouter.js";
import userRouter from "./router/userRouter.js";
import cors from "cors"
import dotenv from "dotenv"
import { connectDb } from "./model/utils.js";

const app = express()

dotenv.config()
const PORT = process.env.PORT || 3000


const corsOption = {
    origin:true,
    credentials:true
}

app.use(express.json())

app.use(cors(corsOption))
app.use(employeeRouter)
app.use(bookRouter)
app.use(authRouter)
app.use(userBookRouter)
app.use(userRouter)


app.get("/",(req,res)=>{
    res.send("Ini adalah benar bahwa demikian adanya")
})


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`);
    })
})
