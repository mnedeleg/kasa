import React, { useEffect, useState } from 'react'
// import {FaArrowAltRight, FaArrowAltLeft } from 'react-icons'
// import {useState} from "react-router-dom";
import {useParams,  useNavigate} from "react-router-dom";
import appartementListData from "../../data/kasa-datas.json";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

// import Appartment from "../Appartment/index";

const Carousel = ({ slides }) => {
    const [appt, setAppt] = useState(null)
    const [current, setCurrent] = useState(0);
    const picturesTab = slides;
    const length = picturesTab.length;
  
    const nextPicture = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if(!Array.isArray(picturesTab) || picturesTab.length <= 0 ) {
        return null;
    }
   
    return (
        <div>
            <div className='img-container'> 
                <img className= "img-containter-single" src= {slides[current]} alt='slides image '/>
            </div>    
            <div>
                <FaAngleLeft className='left-arrow' onClick={prevPicture}/>
                <FaAngleRight className='right-arrow' onClick={nextPicture}/>
            </div>
        </div>

    )};

export default Carousel