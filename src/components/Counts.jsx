import React from "react";
import count1 from "../images/count1.svg";
import count2 from "../images/count2.svg";
import count3 from "../images/count3.svg";
import count4 from "../images/count4.svg";

import { FaHandsPraying } from "react-icons/fa6";

export default function Counts() {
  return (
    <div className="lg:flex justify-evenly bg-[#F5F7FA] mt-16 items-center py-20 max-md:px-6 max-md:flex-col">
      <div>
        <h4 className="font-bold text-3xl pb-2">
          Helping a local <br></br>
          <span className="text-[#4CAF4F]">business reinvent itself</span>
        </h4>

        <p className="text-[#18191F]">
          We reached here with our hard work and dedication
        </p>
      </div>

      {/* icons */}

        <div className="flex flex-wrap w-[450px] gap-y-10 max-md:w-full max-md:py-12">
          
          <div className="flex max-md:gap-4 gap-8 items-center w-1/2">
            <img className="max-md:h-14 w-14"
            src={count1} alt="count-logo" />

            <div >
              <p className="font-bold text-xl text-[ #4D4D4D]">25,245</p>
              <p className="text-[#717171]">Members</p>
            </div>
          </div>

          
          <div className="flex max-md:gap-4 gap-8 items-center w-1/2">
           
          <FaHandsPraying size={40} color="#4CAF4F" />

            <div >
              <p className="font-bold text-xl text-[ #4D4D4D]">2,458,522</p>
              <p className="text-[#717171]">Clubs</p>
            </div>
          </div>


          <div className="flex max-md:gap-4 gap-8 items-center w-1/2">
            <img className="h-14 w-14"
            src={count3} alt="count-logo" />

            <div >
              <p className="font-bold text-xl text-[ #4D4D4D]">85,922</p>
              <p className="text-[#717171]">Events Booking</p>
            </div>
          </div>


          <div className="flex max-md:gap-4 gap-8 items-center w-1/2">
            <img className="h-14 w-14"
            src={count4} alt="count-logo" />

            <div >
              <p className="font-bold text-xl text-[ #4D4D4D]">95,522</p>
              <p className="text-[#717171]">Members</p>
            </div>
          </div>


        </div>
    </div>
  );
}
