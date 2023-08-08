import { Books } from "../model/Books.js";
import { Users } from "../model/Users.js";



export const addUserBook = async(req,res)=>{
    const {userId,bookId} = req.body
    const user = await Users.findByPk(userId)
    if(!user){
        return res.status(404).json({success:false,message:`User cant be found`}) 
    }
    const book = await Books.findByPk(bookId)
    if(!book){
        return res.status(404).json({success:false,message:`Book cant be found`}) 
    }
    book.userId = userId
    await book.save()
    return res.status(200).json({success:true,message:`user book has been updated`}) 
}

export const getAllUserBook = async(req,res)=>{
    const userId = req.query.userId
    console.log(userId);
    const user = await Users.findByPk(userId)
    if(!user){
        return res.status(404).json({success:false,message:`User cant be found`}) 
    }
    const books = await Books.findAll({
        where:{
            userId
        }
    })
    return res.status(200).json({success:true,message:`user book has been updated`,data:books}) 
}

export const deleteUserBook = async(req,res)=>{
    const bookId = req.query.bookId
    console.log(bookId);
    const book = await Books.findByPk(bookId)
    if(!book){
        return res.status(404).json({success:false,message:`Book cant be found`}) 
    }
    book.userId = null
    await book.save()
    return res.status(200).json({success:true,message:`user book has been deleted`}) 
}