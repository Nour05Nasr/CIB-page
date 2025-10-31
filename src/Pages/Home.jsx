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
import NewsCard from '../Components/Common/NewsCard';
import Ex from '../Assets/Ex.svg';
import Bloomberg from '../Assets/Bloomberg.svg';
import Good from '../Assets/Good.svg';
import icon4 from '../Assets/icon4.svg';
import icon5 from '../Assets/icon5.svg';
import icon6 from '../Assets/icon6.svg';
import icon7 from '../Assets/icon7.svg';
import icon8 from '../Assets/icon8.svg';
import icon9 from '../Assets/icon9.svg';
import WeCard from '../Components/Common/WeCard';
import Footer from '../Components/Layout/Footer';
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
        <div className='news_section top gap2'>
          <SectionTitle title="News"/>
          <NewsCard title="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"/>
          <NewsCard title="08/09/2025 - Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services"/>
          <NewsCard title="21/08/2025 - Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations"/>
          <Button title="View All News"/>
        </div>
        <div className='ad_section top'>
          <div className='ad_card'>
            <h2 className='ad_h'>CIB on an international scale</h2>
            <p className='center_p'>Learn more about CIB's presence outside of Egypt</p>
            <Button title="Learn more"/>
          </div>
        </div>
        <div className='logos gap'>
          <div className='display'>
          <SubTitle title="SUSTAINABLE FINANCE"/>
          <SectionTitle title="Sustainability is an integral part of the way we work"/>
          </div>
          <div className='cards_div'>
          <div className='display box_w'>
            <img src={Ex} alt="logos" />
            <h2 className='logos_h'>S&P/EGX ESG Index</h2>
          </div>
          <div className='display box_w'>
            <img src={Bloomberg} alt="logos" />
            <h2 className='logos_h'>Bloomberg Gender Equality Index</h2>
          </div>
          <div className='display box_w'>
            <img src={Good} alt="logos" />
            <h2 className='logos_h'>FTSE4Good Index</h2>
          </div>
          </div>
          <Button title="Learn more"/>
        </div>
        <div className='awwards gap'>
          <div className='display'>
          <SubTitle title="AWARDS"/>
          <SectionTitle title="CIB's integrity and quality are recognized internationally"/>
          </div>
          <div className='cards_div'>
          <div className='display box_w'>
            <img src={icon4} alt="icons" />
            <h2 className='logos_h'>Best Private Bank in Egypt</h2>
                        <p className='center_p'>Global Finance - 2023</p>
          </div>
          <div className='display box_w'>
            <img src={icon5} alt="icons" />
            <h2 className='logos_h'>Best Mergers & Acquisitions <br />Deal in MENA</h2>
                        <p className='center_p'>Euromoney - 2023</p>
          </div>
          <div className='display box_w'>
            <img src={icon6} alt="icons" />
            <h2 className='logos_h'>Best Bank in Egypt</h2>
            <p className='center_p'>Euromoney - 2023</p>
          </div>
          </div>
          <Button title="See all our awards"/>
        </div>
         <div className='apply'>
          <SubTitle title="WE CARE"/>
          <SectionTitle title=" Our dedicated team is committed to meeting your needs"/>
          <div className='cards_div'>
            <WeCard image={icon7} title="Online"/>
            <WeCard image={icon8} title="On the phone"/>
            <WeCard image={icon9} title="In branch"/>
          </div>
          </div>
          <Footer />
        </>
      );
}
 
export default Home;