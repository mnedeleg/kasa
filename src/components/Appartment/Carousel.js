import React, { useEffect, useState } from 'react'
// import {FaArrowAltRight, FaArrowAltLeft } from 'react-icons'
// import {useState} from "react-router-dom";
import {useParams,  useNavigate} from "react-router-dom";
import appartementListData from "../../data/kasa-datas.json";
import { FaChevronCircleRight, FaChevronRight} from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
    const [appt, setAppt] = useState(null)
    const [current, setCurrent] = useState(0);
    const picturesTab = slides;
    const length = picturesTab.length;
  
    const nextPicture = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const nextNumber = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
       
         return(
            <h1>{current}</h1>
        )
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    const prevNumber = () => {
        // return(
        //     <div>{current}</div>
        // )
    }

    return (
        <div className='carousel'>
            <div className='img-container'> 
                <img className= "img-containter-single" src= {slides[current]} alt="images de l'intérieur de l'appartement"/>
            </div>    
            <div>
                <FaChevronLeft className='left-arrow' onClick={prevPicture, prevNumber}/>
                <FaChevronRight className='right-arrow' onClick={nextPicture, nextNumber}/>
            </div>
        </div>
    )};

export default Carousel