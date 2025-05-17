import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Signup() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className=' shadow-2xl shadow-slate-700 rounded-lg p-8' >
  <div >
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-xl mb-7 text-center">Signup</h3>
     <div>
        <span className="mt-4">Name</span>
        <br/>
        <input type="text" placeholder="Enter your fullname" className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base" {...register("name", { required: true })}/>
     {errors.name && <span>fullname is required</span>}
    </div>
    <br/>
    <div>
        <span className="mt-4">Email</span>
        <br/>
        <input type="email" placeholder="Enter your email" className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base" {...register("email", { required: true })}/>
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
        <button className="badge badge-outline cursor-pointer p-4 hover:font-extrabold hover:text-teal-400 bg-black text-cyan-400 hover:bg-zinc-950 duration-200 mr-28">Signup</button>
        <p>already have account? <Link to="/" className="underline text-rose-500 cursor-pointer hover:text-red-400">Login</Link></p>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup