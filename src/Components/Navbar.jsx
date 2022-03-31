import React from 'react';
import Logo from "../logo/logo_web 1.svg"
const Navbar = () => {
  return (
      <div className='Container'>
        <div className='Left'>
            <img src={Logo} alt="Logo" className='logo' />
        </div>

        
         <div className="middle">
         </div>


        <div className="Right">
           <ul className='navItems'>
             <li id="1">Our Products</li>
             <li id="2">Insights</li>
             <li id="3">Smart Yarn</li>
             <li id="4">About</li>
             <li id="5">Contact</li>
           </ul>
        </div>
      </div>
  )
}

export default Navbar