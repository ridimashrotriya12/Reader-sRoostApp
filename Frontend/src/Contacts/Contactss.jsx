import React from 'react'
import Navbar from '../components/navbar'
import Contactt from '../components/Contactt'
import Footer from '../components/Footer'

function Contactss() {
  return (
    <>
    <Navbar/>
     <div  className="flex flex-col justify-center items-center min-h-screen pt-20">
  <button
    className="btn btn-primary mb-4 border border-black hover:text-lg bg-black text-rose-500 shadow-md shadow-slate-600"
    onClick={() => document.getElementById("my_modal_4").showModal()}
 
  >
    Contact Us
  </button>
    <Contactt/>
 </div>
 <Footer/>
    </>
  )
}

export default Contactss