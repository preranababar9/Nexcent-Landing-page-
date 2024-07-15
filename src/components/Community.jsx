import React from 'react';
import icon from "../images/icon.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

export default function Community() {
  return (
        // main div
        <div>
    <div className="flex flex-col justify-center items-center gap-4 pt-8 ">
        {/* first div */}
        <div className='text-center'> 
                <h4 className=" text-3xl font-semibold pb-4 text-[#4D4D4D]">Manage your entire community <br></br> <span >in a single system </span></h4>
                <p className="text-[#717171]">Who is Nextcent suitable for? </p>
        </div>
        </div>

{/* second div */}
        <div className="flex p-10  justify-around p-[0 144 0 144]  ">


                <div className="flex flex-col items-center  gap-4">
                        <img 
                        src={icon}

                        alt="members"
                        ></img>

                        <h2 className="font-bold text-2xl text-[#4D4D4D]  text-center">Membership<br></br> Organization</h2>
                        <p className="text-center text-[#717171] ">Our membership management <br></br>software provides full automation of<br></br> membership renewals and payments</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                <img 
                        src={icon2}
                        alt="nationals"
                        ></img>

                        <h2 className="font-bold text-2xl text-[#4D4D4D]  text-center">National <br></br> Associations</h2>
                        <p className="text-center text-[#717171] ">Our membership management <br></br>software provides full automation of<br></br> membership renewals and payments</p>  
                </div>

                <div className="flex flex-col items-center gap-4">
                <img 
                        src={icon3}
                        alt="clubs"
                        ></img>

                        <h2 className="font-bold text-2xl text-[#4D4D4D]  text-center">Clubs and <br></br>Groups</h2>
                        <p className="text-center text-[#717171] "> Our membership management<br></br> software provides full automation of <br></br>membership renewals and payments</p>  
                </div>
                </div>
                </div>

  
  )
}
