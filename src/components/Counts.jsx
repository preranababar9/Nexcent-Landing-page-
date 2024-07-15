import React from 'react';
import count1 from "../images/count1.svg";
import count2 from "../images/count2.svg";
import count3 from "../images/count3.svg";
import count4 from "../images/count4.svg";


export default function Counts() {
  return (
    <div className='flex justify-evenly bg-[#F5F7FA] mt-16 items-center pt-8 pb-10'>
        <div>
        <h4 className='font-bold text-3xl pb-2'>Helping a local <br></br><span className='text-[#4CAF4F]'>business reinvent itself</span></h4>

        <p className='text-[#18191F]'>We reached here with our hard work and dedication</p>

        </div>

{/* icons */}
     <div className='flex flex-col justify-evenly'>       
        <div className='flex pr-8 '>


                <div className='pr-6 '>
        <img
                src={count1}
                alt="count"
                > 
              </img></div>

              <div >
              <p className='font-bold text-xl text-[ #4D4D4D]' >2,245,341</p>
              <p className='text-[#717171]'>Members</p>
              </div>
              

            
<div className='pr-4'>
              <img className='pr-6 '
                src={count2}
                alt="count"
                > 
              </img></div>

              <div>
              <p className='font-bold text-xl text-[ #4D4D4D]'>46,266</p>
              <p className='text-[#717171]'>Clubs</p>
              </div>
              </div>       

<div className='flex mt-10 '>
            <div className='pr-6 '>
              <img
                src={count3}
                alt="count"
                > 
              </img></div>

              <div>
              <p className='font-bold text-xl text-[ #4D4D4D] '>838,275</p>
              <p className='text-[#717171]'>Event Bookings</p>
              </div>

          <div>  <img className='pr-6 '
                src={count4}
                alt="count"
                > 
              </img> </div>  

              <div>
              <p className='font-bold text-xl text-[ #4D4D4D]'>1,926,436</p>
              <p className='text-[#717171]'>Payments</p>
              </div>
              
        </div> 
        </div>
        </div>  
  )
}
