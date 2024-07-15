import React from 'react';
import ClientsLogo from "../images/ClientsLogo.png";
import Marquee from "react-fast-marquee";

export default function Client() {
  return (
    <div className=" flex flex-col justify-center items-center  gap-4 pt-8">

        <h2 className="items-center text-3xl font-bold text-[#4D4D4D]">Our Clients</h2>
        <p className="text-[#717171]">We have been working with some Fortune 500+ clients </p>
<Marquee>
          <img className=""
        src ={ClientsLogo}
        alt="clients"
        ></img>
        </Marquee>
    </div>
  )
}
