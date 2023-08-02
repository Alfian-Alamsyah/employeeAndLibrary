import { Users } from "../model/Users.js";



export const addUserBook = async(req,res)=>{
    const {userId,bookId} = req.body

    const user = await Users.findByPk(userId)

    if(!user){
        return res.status(404).json({success:false,message:`User cant be found`}) 
    }
    user.bookId = bookId
    await user.save()
    return res.status(404).json({success:true,message:`user book has been updated`}) 
    
}