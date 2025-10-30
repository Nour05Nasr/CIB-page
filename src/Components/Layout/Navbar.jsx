import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <>
        <div className='nav'>
          <img src="/assets/logo.svg" alt="CIB 50 years logo" />
          <p className='nav_p'>About Us</p>
          <p className='nav_p'> Investor Relations </p>
          <p className='nav_p'>Responsible Banking</p>
          <p className='nav_p'>Newsroom</p>
          <p className='nav_p'>Learning Center</p>
          <p className='nav_p'>Careers</p>
          <p className='nav_p'>Others</p>
        </div>
        </>
     );
}
 
export default Navbar;