import React, { Component } from 'react';
import news from '../../Assets/news.jpg';
import './NewsCard.css';

const NewsCard = (props) => {
    return ( 
        <>
        <div className='news_card'>
            <img src={news} alt=""/>
            <div>
            <p className='center_p'>{props.title}</p>
            <h2 className='card_text'>Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</h2>
            <p className='center_p'>CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.</p>
            </div>
        </div>
        </>
     );
}
 
export default NewsCard;