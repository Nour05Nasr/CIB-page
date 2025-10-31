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
import CenterCard from '../Components/Common/CenterCard';
import card1 from '../Assets/card1.jpg';
import card2 from '../Assets/card2.jpg';
import card3 from '../Assets/card3.jpg';
import Button from '../Components/Common/Button';
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
          <SubTitle title="APPLY ONLINE"/>
          <SectionTitle title="Apply online now for cards and loans with ease!"/>
          <div className='cards_div'>
            <Card image={icon1} title="Apply for a New Account"/>
            <Card image={icon2} title="Apply for a card"/>
            <Card image={icon3} title="Apply for a loan or overdraft"/>
          </div>
        </div>
        <div className='display gap'>
          <div className='display'>
        <SectionTitle title="Learning Center"/>
        <p className='section_p'>Learn more about banking and your finances</p>
          </div>
        <div className='cards_div'>
          <CenterCard image={card1} title="Buying and making a home"/>
          <CenterCard image={card2} title="Traveling on a budget"/>
          <CenterCard image={card3} title="University life tips"/>
        </div>
        <Button title="View more"/>
        </div>
        <div className='apply top'>

        </div>

        </>
      );
}
 
export default Home;