import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Components/Layout/Navbar';
import Header from '../Components/Layout/Header';
import SmallMenuTap from '../Components/Common/SmallMenuTap';
import SubTitle from '../Components/Common/SubTitle';
import SectionTitle from '../Components/Common/SectionTitle';
import Card from '../Components/Common/Card';
import icon1 from '../Assets/icon1.svg';
import icon2 from '../Assets/icon2.svg';
import icon3 from '../Assets/icon3.svg';
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
          <SubTitle title="A P P L Y   O N L I N E"/>
          <SectionTitle title="Apply online now for cards and loans with ease!"/>
          <div className='cards_div'>
            <Card image={icon1} title="Apply for a New Account"/>
            <Card image={icon2} title="Apply for a card"/>
            <Card image={icon3} title="Apply for a loan or overdraft"/>
          </div>
        </div>
        </>
      );
}
 
export default Home;