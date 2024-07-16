import React from 'react'
import footerlogo from "../images/footer-logo.svg";

export default function Footer() {
  return (
    <div className='bg-black'>
        <div>
             <img 
             src={footerlogo}
             alt="footer-logo"
             >

             </img>
        </div>
    </div>
  )
}
