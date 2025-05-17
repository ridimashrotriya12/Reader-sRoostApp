import React from 'react'

 function Cards({ item }) {
 console.log(item)  ;  
  return (
    <>
    <div className="mt-8">
       <div className="card bg-base-100 w-96 p-3 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary bg-rose-600">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline cursor-pointer p-4 bg-black text-cyan-400  hover:bg-zinc-950 hover:font-extrabold hover:text-teal-400 duration-200">${item.price}</div>
      <div className="badge badge-outline cursor-pointer p-4 hover:font-extrabold hover:text-teal-400 bg-black text-cyan-400 hover:bg-zinc-950 duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
export default Cards;
