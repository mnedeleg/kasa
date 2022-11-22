import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json"
import Appartment from "./index"
import { FaStar } from "react-icons/fa";
import "../Appartment/star.css"

const StarRating = (rating) => {
    

    return (
        <div className='all-stars'>
            {[1, 2, 3, 4, 5].map((index) => {

                const color = index <= rating ? "red" : "blue"
                return(
                    <FaStar key={index} color={color}/>
                )
            })}
        </div>
    );
}

export default StarRating;