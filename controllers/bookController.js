import { Books } from "../model/Books.js";


export const addBook = async(req,res)=>{
    try {
        const {title,author,category,publishedYear} = req.body
        const newBook = await Books.create({
            title,author,category,publishedYear
        })
        return res.status(201).json({success:true,message:"new Book is created",data:newBook})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to create new Book: ${error.message}`})
    }
}
export const getAllBook = async(req,res)=>{
    try {
        const allBooks = await Books.findAll()
        return res.status(201).json({success:true,message:"get all books data",data:allBooks})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to get all books data: ${error.message}`})
    }
}

export const updateBook = async (req,res)=>{
    try {
        const id = req.params.id
        const {title,author,category,publishedYear} = req.body
        await Books.update({
        title,
        author,
        category,
        publishedYear
    },
    {
        where:{id}
    })
        const updatedBook = await Employees.findByPk(id)
        return res.status(201).json({success:true,message:"employee data is updated",data:updatedBook})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to update employee data: ${error.message}`})
    }
}


export const deleteBook = async (req,res)=>{
    try {
        const id = req.params.id
        await Books.destroy({
            where:{
                id
            }
        })
        return res.status(201).json({success:true,message:"Book data is deleted"})
    } catch (error) {
        return res.status(500).json({success:false,message:`failed to delete book data: ${error.message}`})
    }
}