

import express from "express"
import { addEmployee,getEmployee,getAllEmployee,deleteEmployee,updateEmployee } from "../controllers/employeeController.js"
const employeeRouter = express.Router()


employeeRouter.post("/employees",addEmployee)
employeeRouter.get("/employees/:id",getEmployee)
employeeRouter.get("/employees",getAllEmployee)
employeeRouter.delete("/employees/:id",deleteEmployee)
employeeRouter.put("/employees/:id",updateEmployee)

export default employeeRouter