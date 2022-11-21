import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json"
import Appartment from "./index"
import { FaStar } from "react-icons/fa";
import "../Appartment/star.css"

const StarRating = () => {

    return (
        <div className='all-stars'>
            <div className='star'>
                <FaStar/>
            </div>

            <div className='star'>
                <FaStar/>
            </div>
          
            <div className='star'>
                <FaStar/>
            </div>
            
            <div className='star'>
                <FaStar/>
            </div>
            
            <div className='star'>
                <FaStar/>
            </div>
        
        </div>
    );
}

export default StarRating;