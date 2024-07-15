import React from 'react'
import pana from "../images/pana.svg";

export default function Body() {
  return (
        <div className="flex justify-evenly items-center pt-16 pr-10 pl-10">

        <div className='w-30%'>
          <img 
          src={pana}
          alt="banner-img"></img>
        </div>

        <div className="w-50% ">
        <h2 className='text-[#4D4D4D] font-semibold text-4xl pb-4 '> How to design your site footer like<br></br>we did </h2>

        <p className='text-[#717171] pb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste officia 
                animi vel <br></br> voluptatem voluptatum ullam aliquam ab veniam temporibus? Corporis, 
                atque<br></br> cum error similique cupiditate nulla tempore soluta delectus cum error <br></br> similique cupiditate nulla tempore soluta delectus.</p>

                <button className="bg-[#388E3B] text-white border-solid  border-2  p-3 px-7 hover:text-black  rounded-md">Learn More</button>
        </div>
    </div>
  )
}
