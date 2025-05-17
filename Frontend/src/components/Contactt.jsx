import React from 'react'
import { useForm } from 'react-hook-form';

function Contactt() {
 const {
     register,
     handleSubmit,
     
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data)
    const closeModal = () => {
     const modal = document.getElementById('my_modal_4');
     if (modal) modal.close();
   };
   return (
     <div>
         <dialog id="my_modal_4"className="modal" >
   <div className="modal-box">
     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
       {/* if there is a button in form, it will close the modal */}
       <button type="button"
   onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
     
     <h3 className="font-bold text-xl mb-7 text-center">Contact Us</h3>
     
     <div>
         <span className="mt-4">Name</span>
         <br/>
         <input type="name" placeholder="Enter your fullname" className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base" {...register("name", { required: true })} />
        {errors.name && <span>fullname is required</span>}
     </div>
     <br/>
     <div>
         <span >Email</span>
         <br/>
         <input type="email" placeholder="Enter your email" className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base" {...register("email", { required: true })}/>
     {errors.email && <span>email is required</span>}
     </div>
     <br/>
     <div>
         <span >Message</span>
         <br/>
         <input type="text" placeholder="Enter your message" className="w-80 px-4 py-1 mt-4 border border-black hover:bg-gray-950 hover:text-lg rounded text-base" {...register("message", { required: true })}/>
     {errors.message && <span>message is required</span>}
     </div>
     
     <div className="flex justify-around mt-12">
         <button className="badge badge-outline cursor-pointer p-4 hover:font-extrabold hover:text-teal-400 bg-black text-cyan-400 hover:bg-zinc-950 duration-200 mr-28">Submit</button>
         
     </div>
     </form>
   </div>
 </dialog>
     </div>
   )
}

export default Contactt