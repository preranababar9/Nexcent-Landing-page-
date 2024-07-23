import React from 'react';
import banner from "../images/banner.png"

export default function Banner() {
  return (
    <div className="lg:flex lg:justify-evenly w-full items-center lg:pt-16 lg:r-10 lg:pl-10  max-md:flex-col max-md:items-center max-md:justify-evenly px-6 py-6">

        <div className='w-30%'>
          <img 
          src={banner}
          alt="banner-img"></img>
        </div>

        <div className="w-50% flex flex-col max-md:justify-center ">
        <h2 className='text-[#4D4D4D] font-semibold text-4xl pb-4 max-md:text-center'>The unseen of spending three <br></br>years at Pixelgrade</h2>

        <p className='text-[#717171] pb-6 max-md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste officia 
                animi vel <br></br> voluptatem voluptatum ullam aliquam ab veniam temporibus? Corporis, 
                atque<br></br> cum error similique cupiditate nulla tempore soluta delectus.</p>

                <button className="bg-[#388E3B] text-white border-solid  border-2  p-3 px-7 hover:text-black  rounded-md max-md:mx-auto w-fit">Learn More</button>
        </div>
    </div>
  )
}
