import React, { Component } from 'react';
import './WeCard.css';

const WeCard = (props) => {
    return ( 
        <>
        <div className='wecard'>
            <img src={props.image} alt="icon"/>
            <div>
            <h2 className='card_text'>{props.title}</h2>
            <p className='center_p'>Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media.</p>
            </div>
        </div>
        </>
     );
}
 
export default WeCard;