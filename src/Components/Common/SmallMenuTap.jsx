import React, { Component } from 'react';
import './SmallMenuTap.css';

const SmallMenuTap = (props) => {
    return (  
        <>
            <p className='menu_p'> {props.title} </p>
        </>
    );
}
 
export default SmallMenuTap;