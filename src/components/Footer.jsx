import React from 'react'
import footerlogo from "../images/footer-logo.svg";
import insta from "../images/insta.svg";
import web from "../images/web.svg";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.svg";


export default function Footer() {
  return (
    <div className='bg-black py-14 px-14 w-full lg:flex justify-evenly max-md-flex-col'>



        <div className='pb-3' >
          <p className='text-white text-xl font-bold pb-5'>Company</p>
          <ul className='text-[silver] '>
            <li className='pb-1 hover:text-white'><a>About Us</a></li>
            <li className='pb-1 hover:text-white'><a>Blog</a></li>
            <li className='pb-1 hover:text-white'><a>Contact Us</a></li>
            <li className='pb-1 hover:text-white'><a>Pricing</a></li>
            <li className='pb-1 hover:text-white'><a>Testimonals</a></li>
          </ul>
        </div>


        <div className='pb-3'>
          <p className='text-white text-xl font-bold pb-5'>Support</p>
          <ul className='text-[silver] '>
            <li className='pb-1 hover:text-white  '><a>Helpcenter</a></li>
            <li className='pb-1 hover:text-white '><a>Terms of Service</a></li>
            <li className='pb-1 hover:text-white '><a>Legal</a></li>
            <li className='pb-1 hover:text-white '><a>Privacy Policy</a></li>
            <li className='pb-1 hover:text-white '><a>Status</a></li>
          </ul>
        </div>

        <div className='pb-3'>
          <p className='text-white text-xl font-bold pb-3 max-md:pt-3'>Stay Up to Date</p>

          {/* <label class="block "> */}
  {/* <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
   
  </span> */}
  <input type="email" name="email" class="mt-6 px-8 py-3 bg-[#263238] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-[#D9DBE1]" placeholder="Your Email Address" />
{/* </label> */}

        </div>

        <div className=' h-full pb-6 max-md:pt-10'>
           <img className='pb-10'
           src={footerlogo} alt="footer-logo" />

           <p className='text-[silver] font-medium text-[14px]'>Copyright © 2020 Nexcent ltd.</p>
           <p className='text-[silver] font-medium text-[14px] pb-10'>All rights reserved</p>

           <div className='flex gap-3 '>
            <img   src={insta} alt="" />

            <img src={web} alt="" />

            <img src={twitter} alt="" />

            <img src={youtube} alt="" />
           </div>

        </div>

       


    </div>
  )
}
