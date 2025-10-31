import React, { Component } from 'react';
import './Card.css';

const Card = (props) => {
    return ( 
        <>
        <div className='card'>
            <img src={props.image} alt=""/>
            <h2 className='card_text'>{props.title}</h2>
        </div>
        </>
     );
}
 
export default Card;