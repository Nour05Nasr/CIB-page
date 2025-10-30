import React, { Component } from 'react';
import Button from '../Common/Button';
import './Header.css';

const Header = () => {
    return ( 
        <>
        <div className='hero'>
        <div className='hero_div'>
            <h1 className='hero_h1'>CIB</h1>
            <p className='hero_p'>Delivering value to our clients, our </p>
            <p className='hero_p'>community and our shareholders</p>
            <Button title="Discover more"/>
        </div>
          <img className='hero_img' src="/assets/hero.jpg" alt="CIB 50 years logo" />
        </div>
        </>
     );
}
 
export default Header;