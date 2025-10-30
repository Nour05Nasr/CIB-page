import React, { Component } from 'react';
import MainMenuTap from '../Common/MainMenuTap';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <>
        <div className='nav'>
          <img src="/assets/logo.svg" alt="CIB 50 years logo"/>
          <MainMenuTap title="About Us"/>
          <MainMenuTap title="Investor Relations"/>
          <MainMenuTap title="Responsible Banking"/>
          <MainMenuTap title="Newsroom"/>
          <MainMenuTap title="Learning Center"/>
          <MainMenuTap title="Careers"/>
          <MainMenuTap title="Others"/>
        </div>
        </>
     );
}
 
export default Navbar;