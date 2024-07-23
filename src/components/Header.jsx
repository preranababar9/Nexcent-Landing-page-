import React from "react";
import logo from "../images/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:justify-around max-md:justify-between h-[10vh] px-6 z-10 bg-[#F5F7FA] items-center fixed top-0 w-full">
      <div>
        <img className="" src={logo} alt="logo"></img>
      </div>

      {!open ? (
        <button onClick={() => setOpen(true)} className="lg:hidden text-black ">
          <CiMenuBurger size={20} />
        </button>
      ) : (
        <button
          onClick={() => setOpen(false)}
          className="lg:hidden text-black "
        >
          <RxCross1 size={20} />
        </button>
      )}

      {open && (
        <div className="absolute top-14 bg-green left-0  h-fit w-full md:hidden z-20">
          <ul className=" lg:flex gap-10 text-lg px-6 py-6 text-white">
            <li className="hover:text-[#28CB8B] hover:text-xl">Home</li>
            <li className="hover:text-[#28CB8B] hover:text-xl">Service</li>
            <li className="hover:text-[#28CB8B] hover:text-xl">Feature</li>
            <li className="hover:text-[#28CB8B] hover:text-xl">Product</li>
            <li className="hover:text-[#28CB8B] hover:text-xl">Testimonal</li>
            <li className="hover:text-[#28CB8B] hover:text-xl">FAQ</li>
          </ul>
        </div>
      )}

      <ul className="max-md:hidden lg:flex gap-10 text-lg  ">
        <li className="hover:text-[#28CB8B] hover:text-xl">Home</li>
        <li className="hover:text-[#28CB8B] hover:text-xl">Service</li>
        <li className="hover:text-[#28CB8B] hover:text-xl">Feature</li>
        <li className="hover:text-[#28CB8B] hover:text-xl">Product</li>
        <li className="hover:text-[#28CB8B] hover:text-xl">Testimonal</li>
        <li className="hover:text-[#28CB8B] hover:text-xl">FAQ</li>
      </ul>

      <div className="max-md:hidden">
        <button className="border-solid border-1 p-2 px-6 text-[#28CB8B]">
          Login
        </button>
        <button className="border-solid  border-2  p-2 px-6 rounded-md text-white bg-[#28CB8B] ">
          Sign Up
        </button>
      </div>
    </div>
  );
}
