import React, {useState, useEffect} from 'react';
import BannerImg from "../../image/banner-img.jpg";

function Banner() {
    return (
        <div className= 'banner'>
            {/* <div>
                <img className='banner-img' src= {BannerImg} alt="image de bord de mer dans le brouillard"/>
            </div> */}
            <h1 className='banner-title'> Chez vous, partout et ailleurs </h1>
            {/* <div className="overlay"></div> */}
        </div>
    )
}

export default Banner;