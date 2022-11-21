import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json"
import Appartment from "./index"
import { FaStar } from "react-icons/fa";
import "../Appartment/star.css"

const StarRating = () => {

    return (
        <div className='all-stars'>
            {[1, 2, 3, 4, 5].map((index) => {
                return(
                    <FaStar/>
                )
            })}

        </div>
    );
}

export default StarRating;