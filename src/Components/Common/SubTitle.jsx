import React, { Component } from 'react';
import './SubTitle.css';

const SubTitle = (props) => {
    return ( 
        <>
        <p className='sub'> {props.title} </p>
        </>
     );
}
 
export default SubTitle;