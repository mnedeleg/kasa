import React, {useState, useEffect} from 'react';
import logo from "../logo/logo-kasa.svg";
import "../navBar/navBar.css";

function NavBar() {


    return (
        <nav className= 'nav-1'>
            <div>
                <img className='logo-img' src={logo} alt= "logo Kasa"/>
            </div>
            <ul className="navBar">
                <li className='item'><a className='link' href="#">Accueil</a></li>
                <li className='item'><a className='link' href="#">À propos</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;