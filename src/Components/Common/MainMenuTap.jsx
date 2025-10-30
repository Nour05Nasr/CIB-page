import React, { Component } from 'react';
import './MainMenuTap.css';

const MainMenuTap = (props) => {
    return ( 
        <>
        <p className='nav_p'> {props.title} </p>
        </>
     );
}
 
export default MainMenuTap;