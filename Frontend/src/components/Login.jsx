import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Login() {
    const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const userInfo = {
          
          email: data.email,
          password: data.password
        }
       await axios.post("http://localhost:4001/user/login", userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            alert("Login successfully");
            document.getElementById("my_modal_3").close();
            setTimeout(()=>{
              
              window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
            },1000);
            
          }
          
        }).catch((err)=>{
         if(err.response){
           console.log(err)
          alert("Login error: " + err.response.data.message);
          setTimeout(()=>{},2000);
         }
        })
  }
   const closeModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) modal.close();
  };
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button type="button"
  onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-xl mb-7 text-center">Login</h3>
    
    <div>
        <span className="mt-4">Email</span>
        <br/>
        <input type="email" placeholder="Enter your email" className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base" {...register("email", { required: true })} />
       {errors.email && <span>email is required</span>}
    </div>
    <br/>
    <div>
        <span >Password</span>
        <br/>
        <input type="text" placeholder="Enter your password" className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base" {...register("password", { required: true })}/>
    {errors.password && <span>password is required</span>}
    </div>
    <div className="flex justify-around mt-12">
        <button className="badge badge-outline cursor-pointer p-4 hover:font-extrabold hover:text-teal-400 bg-black text-cyan-400 hover:bg-zinc-950 duration-200 mr-28">Login</button>
        <p>Not registered? <Link to="/signup" className="underline text-rose-500 cursor-pointer hover:text-red-400">Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}
