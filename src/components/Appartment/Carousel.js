import React, { useEffect, useState } from 'react'
// import {FaArrowAltRight, FaArrowAltLeft } from 'react-icons'
// import {useState} from "react-router-dom";
import {useParams,  useNavigate} from "react-router-dom";
import appartementListData from "../../data/kasa-datas.json";
import Appartment from "../Appartment/index";

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
            <div> 
                <img src= {slides[current]} alt='slides image '/>
            </div>    
            <div>
                <button onClick={prevPicture}>Prev</button>
                <button onClick={nextPicture} >Next</button>
            </div>
        </div>

    )};

export default Carousel