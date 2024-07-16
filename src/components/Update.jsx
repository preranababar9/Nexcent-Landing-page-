import React from 'react';
import image18 from "../images/image 18.svg";
import image19 from "../images/image 19.svg";
import image20 from "../images/image 20.svg";

export default function Update() {
  return (
    <div className='pl-36 pr-36'>
        <div className="flex flex-col items-center gap-3 mt-10 mb-10 pl-36 pr-36">
                <h3 className='text-[#4D4D4D] font-semibold text-3xl'>Caring is the new marketing</h3>
                <p className='text-center text-[#717171]'>The Nexcent blog is the best place to read about the latest membership insights,<br></br> trends and more. See who's joining the community, read about how our community <br></br>are increasing their membership income and lot's more.​</p>
        </div>

 <div className='flex justify-around pl-8 pr-8'>

  {/* 1st Card */}
                <div className='mb-10'>
                        <img className='w-82 h-70'
                        src={image18}
                        alt="first-img"
                        ></img>

                        <div className='bg-[#F5F7FA] w-64 h-40 flex gap-8 flex-col
                        items-center rounded-xl pt-3 pb-3 relative'>

                        <p className='text-center text-[#717171] text-lg font-semibold'>Creating Streamlined <br></br>Safeguarding Processes  <br></br>with OneRen</p>

                        <a className='text-[#4CAF4F] text-lg font-semibold'>Readmore</a>
                        </div>
                </div>



{/* 2nd Card */}
                <div>
                        <img  className='w-82 h-70'
                        src={image19}
                        alt="first-img"
                        ></img>

                        <div className='bg-[#F5F7FA] w-64 h-40 flex gap-8 flex-col
                        items-center rounded-xl pt-3 pb-3'>

<p className='text-center text-[#717171] text-lg font-semibold'>What are your safeguarding <br></br>responsibilities and how can<br></br> you manage them?</p>

                        <a className='text-[#4CAF4F] text-lg font-semibold'>Readmore</a>
                        </div>
                </div>



{/* 3rd card */}
                <div>
                        <img className='w-82 h-70' 
                        src={image20}
                        alt="first-img"
                        ></img>

                        <div className='bg-[#F5F7FA] w-64 h-40 flex gap-8 flex-col
                        items-center rounded-xl pt-3 pb-3'>

<p className='text-center text-[#717171] text-lg font-semibold'>Revamping the Membership <br></br> Model with Triathlon <br></br> Australia</p>

                        <a className='text-[#4CAF4F] text-lg font-semibold'>Readmore</a>
                        </div>
                </div>
        </div>
    </div>
  )
}
