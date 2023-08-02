import { Users } from "../model/Users.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




export const register = async(req,res)=>{
    try {
        const {firstName,lastName,email,password,isAdmin} = req.body
        const salt = bcrypt.genSaltSync(10)
        const encryptedPassword = bcrypt.hashSync(password,salt)
        const newUser = await Users.create({
            firstName,
            lastName,
            email,
            password:encryptedPassword,
            isAdmin
        })
        return res.status(201).json({success:true,message:"new User is created",data:{
            id:newUser.id,
            firstName,
            lastName,
            isAdmin,
            email
        }})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to create new User: ${error.message}`})
    }
}


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        console.log(email);
        console.log(password);
        const user = await Users.findOne({
            where:{
                email
            }
        })
        if(!user){
            return res.status(404).json({success:false,message:`Email or Password is wrong!`}) 
        }
        const comparedPassword = await bcrypt.compare(password,user.password)
        if(!comparedPassword){
            return res.status(404).json({success:false,message:`Email or Password is wrong!`}) 
        }
        const token = jwt.sign({id:user.id,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY,{expiresIn:"15d"})
        return res.status(201).json({success:true,token})
    } catch (error) {
        return res.status(500).json({success:false,message:`bla bla bla: ${error.message}`})
    }
}