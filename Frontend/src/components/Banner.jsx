import React from 'react'
import book from "../../public/book.jpg";


function Banner() {
  return (
   <> 
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div className=" w-full  md:w-1/2 mt-14 md:mt-36">
    <div className="space-y-14">
        <h1 className="text-5xl mt-12 font-bold">Hello, welcome here to learn something <span className="text-rose-600">new everyday!!!</span></h1>
    <p className="text-xl font-semibold">Every great journey begins with a single page. From fiction to philosophy, fantasy to fact—our shelves are full of wonders ready to be explored. Step into a world where every book opens a new door.  Dive into a world of stories, knowledge, and imagination—all at your fingertips. Whether you're chasing thrillers,  or exploring new ideas, there's a book here waiting just for you.</p>
    
    
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
    </div>
    <button className="btn btn-secondary mt-5 bg-black border-b duration-200 cursor-pointer hover:bg-slate-950">Submit</button>
    </div>
    <div className="w-full md:w-1/2 mt-20">
    <img src={book} className =" w-81 rounded-2xl h-85 mt-7" alt=""/>
    
    </div>
    </div>
   </>
  )
}

export default Banner