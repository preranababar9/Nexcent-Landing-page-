import React from 'react';
import hero from "../images/hero.png";

export default function Hero() {
  return (
    <div className="lg:flex justify-around items-center h-[100vh] max-md:justify-center bg-[#F5F7FA] w-full max-md:px-6 mb-4">


      <div className="bg-[#F5F7FA] max-md:pt-32 ">
          <h1 className="lg:text-7xl font-semibold text-3xl max-md:text-centre pb-4 ">Lessons and insights <br></br> <span className="lg:text-7xl text-3xl text-[#388E3B] text-centre lg:text-left ">from 8 years </span></h1>
          <p className="text-[#717171] text-lg pb-5">Where to grow your business as a photographer: site or social media</p>


          <button className="bg-[#388E3B] text-white border-solid  border-2  p-3 px-7 hover:text-black  rounded-md ">Register</button>
      </div>

      <div className='md:py-20 flex items-center justify-center pt-10'>
        <img className="lg:w-96 w-[90%]"
        src={hero}
        alt="hero">
        </img>
      
      </div>
    </div>
  )
}
