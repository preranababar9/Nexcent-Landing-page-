import React from 'react';
import logo from "../images/logo.png";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
  return (
    <div className=" flex justify-around h-[10vh] bg-[#F5F7FA] items-center">
      <div>
        <img className=''
        src={logo}
        alt="logo" ></img>
      </div>

<button className="lg:hidden text-black ">
<CiMenuBurger />
</button>

      <div className="">
        <ul className="hidden lg:flex gap-10 text-lg  ">
          <li className="hover:text-[#28CB8B] hover:text-xl">Home</li>
          <li className="hover:text-[#28CB8B] hover:text-xl">Service</li>
          <li className="hover:text-[#28CB8B] hover:text-xl">Feature</li>
          <li className="hover:text-[#28CB8B] hover:text-xl">Product</li>
          <li className="hover:text-[#28CB8B] hover:text-xl">Testimonal</li>
          <li className="hover:text-[#28CB8B] hover:text-xl">FAQ</li>
        </ul>
      </div>

      <div className="">
        <button className="border-solid border-1 p-2 px-6 text-[#28CB8B]">Login</button>
        <button className="border-solid  border-2  p-2 px-6 rounded-md text-white bg-[#28CB8B] " >Sign Up</button>
      </div>
      </div>
  )
}
