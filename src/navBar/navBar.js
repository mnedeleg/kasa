import React, {useState, useEffect} from 'react';
import logo from "../logo/logo-kasa.jpg";

function NavBar() {


    return (
        <nav>
            <div>
                <img className='logoImage' src={logo} alt= "logo Kasa"/>
            </div>
            <ul className="navBar">
                <li className="item">Accueil</li>
                <li className="item">À propros</li>
            </ul>
        </nav>
    )
}

export default NavBar;