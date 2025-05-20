import mongoose from "mongoose";

const freebookSchema=mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
})

const FreeBook=mongoose.model("FreeBook", freebookSchema);
export default FreeBook;