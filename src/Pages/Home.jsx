import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Components/Layout/Navbar';
import Header from '../Components/Layout/Header';
import SmallMenuTap from '../Components/Common/SmallMenuTap';
{/* <link rel="icon" type="image/x-icon" href="/assets/logo.svg"></link> */}

const Home = () => {
    return (
        <>
        <Navbar />
        <Header />
        <div className='smallmenu'>
          <SmallMenuTap title="Apply Online"/>
          <SmallMenuTap title="News"/>
          <SmallMenuTap title="Blog Articles"/>
          <SmallMenuTap title="CIB International"/>
          <SmallMenuTap title="Sustainable Finance"/>
          <SmallMenuTap title="Awards"/> 
        </div>
        <div className='apply'>

          <div>

          </div>
        </div>
        </>
      );
}
 
export default Home;