import React from 'react';
import clientsLogo from "../images/clientsLogo.png";

export default function Client() {
  return (
    <div >

        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients </p>
        <img 
        src ={clientsLogo}
        alt="clients"
        ></img>
    </div>
  )
}
