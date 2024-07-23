import React from 'react';
import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";
import Logo3 from "../images/Logo3.svg";
import Logo4 from "../images/Logo4.svg";
import Logo5 from "../images/Logo5.svg";
import Logo6 from "../images/Logo6.svg";
import Logo7 from "../images/Logo7.svg";

import Marquee from "react-fast-marquee";

export default function Client() {
        return (
                <div className=" flex flex-col justify-center items-center  gap-4 pt-12">

                        <h2 className="items-center text-3xl font-bold text-[#4D4D4D]">Our Clients</h2>
                        <p className="text-[#717171] text-center ">We have been working with some Fortune 500+ clients </p>

                        <Marquee >
                                <img className="mr-10"
                                        src={Logo1}
                                        alt="clients"
                                ></img>

                                <img className="mr-10"
                                        src={Logo2}
                                        alt="clients"
                                ></img>

                                <img className="mr-10"
                                        src={Logo3}
                                        alt="clients"
                                ></img>

                                <img className="mr-10"
                                        src={Logo4}
                                        alt="clients"
                                ></img>

                                <img className="mr-10"
                                        src={Logo5}
                                        alt="clients"
                                ></img>

                                <img className="mr-10"
                                        src={Logo6}
                                        alt="clients"
                                ></img>

                                <img className="mr-10"
                                        src={Logo7}
                                        alt="clients"
                                ></img>



                        </Marquee>

                </div>
        )
}
