import React, { Component } from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    return ( 
        <>
        <p className='section_title'> {props.title} </p>
        </>
     );
}
 
export default SectionTitle;