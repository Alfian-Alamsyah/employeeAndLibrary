import express, { json }  from "express";
import employeeRouter from "./router/employeeRouter.js";
import bookRouter from "./router/bookRouter.js";
import authRouter from "./router/authRouter.js";
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./model/config.js";

const app = express()
const PORT = process.env.PORT || 3000
dotenv.config()


const corsOption = {
    origin:true,
    credentials:true
}

app.use(express.json())

app.use(cors(corsOption))
app.use(employeeRouter)
app.use(bookRouter)
app.use(authRouter)


app.get("/",(req,res)=>{
    res.send("Ini adalah benar bahwa demikian adanya")
})
app.listen(PORT,()=>{
    db()
    console.log(`server is running at port ${2000}`);
})

