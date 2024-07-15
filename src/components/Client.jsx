import React from 'react';
import ClientsLogo from "../images/ClientsLogo.png";

export default function Client() {
  return (
    <div >

        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients </p>
        <img 
        src ={ClientsLogo}
        alt="clients"
        ></img>
    </div>
  )
}
