import React from 'react';
import hero from "../images/hero.png";

export default function Hero() {
  return (
    <div className="flex justify-around items-center h-[100vh] bg-[#F5F7FA]">
      <div className=" ">
          <h1 className="text-7xl font-semibold">Lessons and insights <br></br> <span className="text-7xl text-[#388E3B] ">from 8 years </span></h1><br></br>
          <p className="text-[#717171]">Where to grow your business as a photographer: site or social media</p>
<br></br>
          <button className="bg-[#388E3B] text-white border-solid  border-2  p-3 px-7 hover:text-black  rounded-md">Register</button>
      </div>

      <div>
        <img className="w-96"
        src={hero}
        alt="hero">
        </img>
      
      </div>
    </div>
  )
}
