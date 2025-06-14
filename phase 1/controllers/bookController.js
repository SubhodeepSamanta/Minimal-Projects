import req from "express/lib/request.js";
import Books from "../models/books.model.js"


export const getBooks= async (req,res)=>{
    const books= await Books.find();
    res.status(200).json(books);
}

export const getBook= async (req,res)=>{
    const {id}= req.params;
    const Book= await Books.findById(id);
    res.send(Book);
}

export const createBooks= async (req,res)=>{
    const {title,author,published_year}= req.body;
    const Book= new Books({
        title,
        author,
        published_year
    })
    await Book.save();
    res.json(newBook);
}

export const updateBook= async(req,res)=>{
    const updatedBook= await Books.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updatedBook);
}

export const deleteBook= async(req,res)=>{
    const deletedBook= await Books.findOneAndDelete(req.params.id);
    res.json(deletedBook)
}