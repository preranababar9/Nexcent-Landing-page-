import React from 'react';
import banner from "../images/banner.png"

export default function Banner() {
  return (
    <div className="flex justify-evenly items-center pt-16 pr-10 pl-10">

        <div className='w-30%'>
          <img 
          src={banner}
          alt="banner-img"></img>
        </div>

        <div className="w-50% ">
        <h2 className='text-[#4D4D4D] font-semibold text-4xl pb-4 '>The unseen of spending three <br></br>years at Pixelgrade</h2>

        <p className='text-[#717171] pb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste officia 
                animi vel <br></br> voluptatem voluptatum ullam aliquam ab veniam temporibus? Corporis, 
                atque<br></br> cum error similique cupiditate nulla tempore soluta delectus.</p>

                <button className="bg-[#388E3B] text-white border-solid  border-2  p-3 px-7 hover:text-black  rounded-md">Learn More</button>
        </div>
    </div>
  )
}
