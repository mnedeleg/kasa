import React, {useState, useEffect} from 'react';
import logo from "../../logo/logo-kasa.svg";
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

 



function NavBar() {
    // let location = useLocation();
    console.log(window.location);
    let { pathname } = window.location
    const activeMenuClassName = (link) => link === pathname ? "active" : ""

    return (
        <nav className='nav-1'>
            {/* <link to='/' className='logo-container'> */}
            <div className='logo-container'>
                <img className='logo-img-nav' src={logo} alt= "logo Kasa"/>
            </div>
            {/* </link> */}
            <ul className=" navigation navBar">
                <li className='item'> <a className={`link ${activeMenuClassName("/")}`} href="/">Accueil</a></li>
                <li className='item'><a className={`link ${activeMenuClassName("/a-propos")}`} href="/a-propos">À propos</a></li>
             
                
            </ul>
            {/* <link to ='/'>Accueil</link>
            <link to ='/a-propos'>À propos</link> */}
        </nav>
    )
}

export default NavBar;