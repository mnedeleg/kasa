import React, {useState, useEffect} from 'react';
import logo from "../../logo/logo-kasa-white.svg";
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

 



function FooterPage() {

    return (

        <footer className='footer'>
            <img className='logo-img' src={logo} alt= "logo Kasa"/>
            <h3 className='footer-text'>© 2020 kasa. All rights reserved</h3>
        </footer>
      
    )
}

export default FooterPage;