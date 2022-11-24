import React, {useState, useEffect} from 'react';
import logo from "../../logo/logo-kasa.svg";
import { Link } from 'react-router-dom';

function NavBar() {

    const { pathname } = window.location
    const activeMenuClassName = (link) => link === pathname ? "active" : ""

    return (
        <nav className='nav-1'>
            <div className='logo-container'>
                <img className='logo-container-img' src={logo} alt= "logo Kasa"/>
            </div>
            <ul className='navigation navBar'>
                <li className='item'> <a className={`link ${activeMenuClassName("/")}`} href="/">Accueil</a></li>
                <li className='item'><a className={`link ${activeMenuClassName("/a-propos")}`} href="/a-propos">À propos</a></li>   
            </ul>
        </nav>
    )
}

export default NavBar;