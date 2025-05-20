import FreeBook from "../Model/freebook.model.js";

export const getFreeBook=async(request,response)=>{
    try{
      const freebook=await FreeBook.find()
      response.status(200).json(freebook)
    }catch(error){
      console.log("Error:", error)
      response.status(500).json(error)
    }
};