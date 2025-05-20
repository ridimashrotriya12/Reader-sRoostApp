import React from 'react'

import Card from '../Courses/card'
import {Link } from "react-router-dom"
import {useEffect, useState } from 'react'
import axios from "axios";

function Course() {
    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try{
              const res =await axios.get("http://localhost:4001/freebook");
              console.log(res.data);
              setBook(res.data);
            }catch(error){
                console.log(error);

            }
        }
        getBook();
    },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-xl md:mt-20 font-semibold md:text-4xl ">We're delighted to have you <span className="text-rose-700">here :)</span></h1>
       <p className="mt-12 text-lg">Some pages carry more than words—they hold wisdom, wonder, and the quiet magic of a well-told story. While these treasured books are not free, their value lies far beyond the price. For those who seek depth, beauty, and brilliance, this collection awaits. Some stories come with a price—but what they give in return is priceless. Our premium books are thoughtfully selected, offering rich narratives, deep insights, and unforgettable journeys. These aren’t just books—they’re investments in your imagination. </p>
       
        <Link to="/">
        <button className="mt-11 badge badge-outline cursor-pointer p-6 text-lg hover:font-extrabold hover:text-teal-400 bg-black text-cyan-400 hover:bg-zinc-950 duration-200 ">Back</button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
        
    </div>
    </>
  )
}

export default Course