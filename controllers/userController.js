import { Users } from "../model/Users.js";


export const getAllUser = async(req,res)=>{
    try {
        const allUser = await Users.findAll()
        return res.status(200).json({success:true,message:`All User Data`,data:allUser}) 
        
    } catch (error) {
        return res.status(500).json({success:true,message:`failed to get all user Data`}) 
    }
}

export const getUser = async(req,res)=>{
    try {
        const id = req.params.userId
        const user = await Users.findByPk(id)
        return res.status(200).json({success:true,message:`All User Data`,data:user}) 
        
    } catch (error) {
        return res.status(500).json({success:true,message:`failed to get all user Data`}) 
    }
}