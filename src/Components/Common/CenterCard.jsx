import React, { Component } from 'react';
import './CenterCard.css';

const CenterCard = (props) => {
    return ( 
        <>
        <div className='center_card'>
            <img className='img1' src={props.image} alt="" />
            <div className='pad'>
             <h2 className='card_text'>{props.title}</h2>
             <p className='center_p'>Buying a home can be an emotional process, but it & rsquo;s important to approach it logically.</p>
            </div>
             <p className='more'>Read more</p>
        </div>
        </>
     );
}
 
export default CenterCard;