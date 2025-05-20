import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import {useEffect, useState } from 'react'



import Cards from "./Cards";

function Freebook() {
  const[freebook,setfreeBook]=useState([])
    useEffect(()=>{
        const getFreeBook=async()=>{
            try{
              const res =await axios.get("http://localhost:4001/freebook");
              
              
       
              setfreeBook(res.data.filter((data)=>data.category === "Free"));
              console.log(res.data);
            }catch(error){
                console.log(error);

            }
        }
        getFreeBook();
    },[])
    

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
            <h1 className="font-semibold text-2xl pb-4">Free Offered Courses</h1>
        <p className="text-lg">Start your reading journey with zero cost and endless imagination. Browse our free book selection and enjoy top titles without spending a cent. Enjoy reading without limits. Dive into our free library and explore stories that inspire, entertain, and enrich—completely free, forever.</p>
        </div>
    
    <div>
        
        <Slider {...settings}>
        {freebook.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}

      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook