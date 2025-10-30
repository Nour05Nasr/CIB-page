import React, { Component } from 'react';
import MainMenuTap from '../Common/MainMenuTap';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <>
        <div className='nav'>
          <img src="/assets/logo.svg" alt="CIB 50 years logo"/>
          <MainMenuTap className='nav_p' title="About Us"/>
          <MainMenuTap className='nav_p' title="Investor Relations"/>
          <MainMenuTap className='nav_p' title="Responsible Banking"/>
          <MainMenuTap className='nav_p' title="Newsroom"/>
          <MainMenuTap className='nav_p' title="Learning Center"/>
          <MainMenuTap className='nav_p' title="Careers"/>
          <MainMenuTap color="white" title="Others"/>
          {/* <p className='nav_p'>About Us</p>
          <p className='nav_p'>Investor Relations</p>
          <p className='nav_p'>Responsible Banking</p>
          <p className='nav_p'>Newsroom</p>
          <p className='nav_p'>Learning Center</p>
          <p className='nav_p'>Careers</p>
          <p className='nav_p'>Others</p> */}
        </div>
        </>
     );
}
 
export default Navbar;