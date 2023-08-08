import { Employees } from "../model/Employees.js"
import { v4 as uuidv4 } from 'uuid';



export const addEmployee = async (req,res)=>{
    try {
        const {name,email,jobTitle,phone,imageUrl} = req.body
        const newEmployee = await Employees.create({
        name,
        email,
        jobTitle,
        phone,
        imageUrl,
        employeeCode:uuidv4()
    })
        return res.status(201).json({success:true,message:"new Employee is created",data:newEmployee})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to create new Review: ${error.message}`})
    }
}

export const getEmployee = async (req,res)=>{
    try {
        const id = req.params.id
        const employee = await Employees.findByPk(id)
        return res.status(201).json({success:true,message:"get employee data",data:employee})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to get employee data: ${error.message}`})
    }
}

export const getAllEmployee = async (req,res)=>{
    try {
        const employees = await Employees.findAll()
        return res.status(201).json({success:true,message:"get all employee data",data:employees})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to get employee data: ${error.message}`})
    }
}

export const updateEmployee = async (req,res)=>{
    try {
        const id = req.params.id
        const {name,email,jobTitle,phone,imageUrl} = req.body
        await Employees.update({
        name,
        email,
        jobTitle,
        phone,
        imageUrl
    },
    {
        where:{id}
    })

        const updatedEmployee = await Employees.findByPk(id)

        return res.status(201).json({success:true,message:"employee data is updated",data:updatedEmployee})
    } catch (error) {
        const ValidationErrorItem = error.errors[0]
        console.log("terjadi error");
        console.log(error);
        console.log("ValidationErrorItem");
        console.log(ValidationErrorItem);

        console.log(ValidationErrorItem.type);
        console.log(ValidationErrorItem.path);
        if(ValidationErrorItem.type == 'unique violation' && ValidationErrorItem.path == "email"){
            return res.status(498).json({success:false,message:`failed to update employee data: alamat email sudah digunakan`})
        }
        if(ValidationErrorItem.type == 'unique violation' && ValidationErrorItem.path == "phone"){
            return res.status(498).json({success:false,message:`failed to update employee data: nomer telepon sudah digunakan`})
        }
        return res.status(499).json({success:false,message:`failed to update employee data:`})
    }
}

export const deleteEmployee = async (req,res)=>{
    try {
        const id = req.params.id
        await Employees.destroy({
            where:{
                id
            }
        })
        return res.status(201).json({success:true,message:"employee data is deleted"})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to delete employee data: ${error.message}`})
    }
}