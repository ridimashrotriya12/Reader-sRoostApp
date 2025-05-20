import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs"

export const signup=async (request,response)=>{
    try{
        const{ fullname, email, password}=request.body;
        const user=await User.findOne({email});
        if(user){
            return response.status(400).json({message: "User already exist with this email id"});
        }
        const hashPassword =await bcryptjs.hash(password,10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        })
        await createdUser.save();
        response.status(201).json({message: "User created successfully!"});
    }catch(error){
        console.log("Error:" + error.message);
        response.status(500).json({message: "internal server error"});
    }
};
export const login=async (request,response) =>{
    try{
       const {email,password}=request.body;
       const user=await User.findOne({email});
       const isMatch=await bcryptjs.compare(password, user.password)
       if(!user || !isMatch){
        return response.status(400).json({message:"Invalid or password"});
       }else{
        response.status(200).json({message:"Login successful!", user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        } })
       }
    }catch(error){
       console.log("Error:" + error.message);
       response.status(500).json({message: "internal server error"});
    }
}