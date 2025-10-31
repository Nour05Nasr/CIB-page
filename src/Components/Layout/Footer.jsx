import React, { Component } from 'react';
import FooterLink from '../Common/FooterLink';
import logo from '../../Assets/logo.svg';
import apple from '../../Assets/apple.png';
import google from '../../Assets/google.png';
import facebook from '../../Assets/facebook.svg';
import instagram from '../../Assets/instagram.svg';
import linkedin from '../../Assets/linkedin.svg';
import youtube from '../../Assets/youtube.svg';
import xxx from '../../Assets/xxx.svg';
import whatsapp from '../../Assets/whatsapp.svg';
import './Footer.css';

const Footer = () => {
    return (  
        <>
        <div className='display'>
        <div className='footer_div'>
            <div className='upper_footer'>
               <img src={logo} alt="CIB logo"/>
               <div className='row_div'>
                 <div className='column_div'>
                    <FooterLink title="FAQs"/>
                    <FooterLink title="Learning Center"/>
                    <FooterLink title="Fees & Charges"/>
                    <FooterLink title="Terms & Conditions"/>
                 </div>
                 <div className='column_div'>
                    <FooterLink title="Local"/>
                    <FooterLink title="Abroad"/>
                    <FooterLink title="Business"/>
                    <FooterLink title="Corporate"/>
                 </div>
                 <div className='column_div'>
                    <FooterLink title="Careers"/>
                    <FooterLink title="Why CIB"/>
                    <FooterLink title="Email us"/>
                    <FooterLink title="System Status"/>
                 </div>
               </div>
               <div className='row_div0'>
                   <img src={google} alt="google play" />
                   <img src={apple} alt="app store" />
               </div>
            </div>

            <hr className='footer_hr' />

            <div className='row_div1'>
                 <div className='row_div3'>
                    <FooterLink title="CBE Approvals"/>
                    <FooterLink title="Cookie Policy"/>
                    <FooterLink title="Privacy Policy"/>
                    <FooterLink title="User Agreements"/>
                 </div>
                 <div className='row_div2'>
                    <img src={facebook} alt="facebook"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={youtube} alt="youtube"/>
                    <img src={xxx} alt="xxx"/>
                    <img src={whatsapp} alt="whatsapp"/>
                 </div>
            </div>
        </div>
            <p className='copy_p'>Copyright © 2025 Commercial International Bank</p>
        </div>
        </>
    );
}
 
export default Footer;