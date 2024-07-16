import React from "react";
import image18 from "../images/image 18.svg";
import image19 from "../images/image 19.svg";
import image20 from "../images/image 20.svg";

export default function Update() {
  return (
    <div className="pl-36 pr-36 py-20">
      <div className="flex flex-col items-center gap-3  mb-10 pl-36 pr-36">
        <h3 className="text-[#4D4D4D] font-semibold text-3xl">
          Caring is the new marketing
        </h3>
        <p className="text-center text-[#717171]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership
          income and lot's more.​
        </p>
      </div>

      <div className="flex justify-around ">
        {/* 1st Card */}

        <div className="mb-10 relative w-82 ">
          <img className="w-82 h-70" src={image18} alt="first-img"></img>

          <div
            className="bg-[#F5F7FA] w-64 h-fit flex gap-8 flex-col
                        items-center rounded-xl pt-3 pb-3 absolute -bottom-20  left-[15%] shadow-lg px-2"
          >
            <p className="text-center text-[#717171] text-lg font-semibold">
              Creating Streamlined Safeguarding Processes with
              OneRen
            </p>

            <a className="text-[#4CAF4F] text-lg font-semibold">Readmore</a>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="mb-10 relative w-82">
          <img className="w-82 h-70" src={image19} alt="first-img"></img>

          <div
            className="bg-[#F5F7FA] w-64 h-fit flex gap-8 flex-col
                        items-center rounded-xl pt-3 pb-3 absolute -bottom-20  left-[15%] shadow-lg px-2"
          >
            <p className="text-center text-[#717171] text-lg font-semibold">
              What are your safeguarding responsibilities and how can
               you manage them?
            </p>

            <a className="text-[#4CAF4F] text-lg font-semibold">Readmore</a>
          </div>
        </div>

        {/* 3rd card */}
        <div className="mb-10 relative w-82">
          <img className="w-82 h-70" src={image20} alt="first-img"></img>

          <div
           className="bg-[#F5F7FA] w-64 h-fit flex gap-8 flex-col
                        items-center rounded-xl pt-3 pb-3 absolute -bottom-20  left-[15%] shadow-lg px-2"
          >
            <p className="text-center text-[#717171] text-lg font-semibold">
              Revamping the Membership Model with Triathlon  Australia
            </p>

            <a className="text-[#4CAF4F] text-lg font-semibold">Readmore</a>
          </div>
        </div>
      </div>
    </div>
  );
}
