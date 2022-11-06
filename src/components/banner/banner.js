import React, {useState, useEffect} from 'react';
import BannerImg from "../../image/banner-img.jpg";

function Banner() {
    return (
        <div>
            <div>
                <img src= {BannerImg} alt="image de bord de mer dans le brouillard"/>
            </div>
                <h1> Chez vous, partout et ailleurs </h1>
        </div>
    )
}

export default Banner;