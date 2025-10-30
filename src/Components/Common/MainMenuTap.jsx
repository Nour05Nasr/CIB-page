import React, { Component } from 'react';
import './MainMenuTap.css';

const MainMenuTap = (props) => {
    return ( 
        <>
        <p> {props.color} {props.title} </p>
        </>
     );
}
 
export default MainMenuTap;