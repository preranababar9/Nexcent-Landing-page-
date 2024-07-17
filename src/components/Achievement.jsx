import React from "react";
import image from "../images/image.svg";
import ClientLogo from "../images/ClientsLogo.png";
import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";
import Logo3 from "../images/Logo3.svg";
import Logo4 from "../images/Logo4.svg";
import Logo5 from "../images/Logo5.svg";
import Logo6 from "../images/Logo6.svg";
import Logo7 from "../images/Logo7.svg";

export default function Achievement() {
  return (
    <div className="bg-[#F5F7FA] py-20 my-10 max-md-flex-col ">
      <div className=" w-full max-w-[1440px] h-full mx-auto flex justify-center  gap-10 items-center  ">
        <div className=" w-1/4">
          <img
            className=" "
            src={image}
            alt="banner-img"
          />
        </div>

        <div className="  w-1/2 h-full">
          <p className="text-[#717171] pb-6 ">
            Maecenas dignissim justo eget nulla rutrum molestie.
            Maecenaslobortis sem dui, vel rutrum risus tincidunt ullamcorper.
            Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
            laoreet elit at ligula molestie,nec molestie mi blandit. Suspendisse
            cursus tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
            potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat
            eget. Quisque vulputate odio neque, eget efficitur libero
            condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
            amet magna.
          </p>

          <p className="text-green text-lg font-semibold pb-2">Tim Smith</p>
          <p className="text-grey pb-4">
            British Dragon Boat Racing Association
          </p>

          <div className="flex w-full justify-between">
            <img className="" src={Logo1} alt="clients"></img>

            <img className="" src={Logo2} alt="clients"></img>

            <img className="" src={Logo3} alt="clients"></img>

            <img className="" src={Logo4} alt="clients"></img>

            <img className="" src={Logo5} alt="clients"></img>

            <img className="" src={Logo6} alt="clients"></img>

            <img className="" src={Logo7} alt="clients"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
