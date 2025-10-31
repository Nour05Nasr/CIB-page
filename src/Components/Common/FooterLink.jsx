import React, { Component } from 'react';
import './FooterLink.css';

const FooterLink = (props) => {
    return (  
        <>
            <p className='footer_p'> {props.title} </p>
        </>
    );
}
 
export default FooterLink;