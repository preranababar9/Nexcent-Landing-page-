import React from 'react'
import image from "../images/image.svg";
import ClientLogo from "../images/ClientsLogo.png";

export default function Body() {
  return (
        <div className="flex justify-between mt-12 bg-[#F5F7FA]">

        <div className=' ' >
          <img 
          src={image}
          alt="banner-img"></img>
        </div>

        <div className="  ">

        <p className='text-[#717171] pb-6 '>Maecenas dignissim justo eget nulla rutrum molestie. Maecenaslobortis sem dui, vel rutrum risus  <br></br>tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br></br> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,nec molestie <br></br>mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br></br> eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, <br></br> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum  <br></br>id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

        <p>Tim Smith</p>
        <p>British Dragon Boat Racing Association</p>

        
                <img  className='w-6/12'
                src={ClientLogo}
                alt="clientslogo"></img>

                <a>Meet all Customers</a>
        </div>
       
    </div>
  )
}
