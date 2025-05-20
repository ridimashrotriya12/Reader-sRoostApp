import Book from "../Model/book.model.js";

export const getBook=async(request,response)=>{
    try{
      const book=await Book.find()
      response.status(200).json(book)
    }catch(error){
      console.log("Error:", error)
      response.status(500).json(error)
    }
};