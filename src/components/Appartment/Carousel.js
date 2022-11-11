import React, { useEffect, useState } from 'react'
import {FaArrowAltRight, FaArrowAltLeft } from 'react-icons'
// import {useState} from "react-router-dom";
import {useParams,  useNavigate} from "react-router-dom";
import appartementListData from "../../data/kasa-datas.json";
import Appartment from "../Appartment/index";

const Carousel = () => {
    const [appt, setAppt] = useState(null)
    const [current, setCurrent] = useState(0)
    const PicturesTab = appt.pictures;
    const length = PicturesTab.length;
  
    const nextPicture = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const PrevPicture = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if(!Array.isArray(PictureTab) || PicturesTab.length <= 0 ) {
        return null;
    }



    console.log("hello");
    console.log(PicturesTab);
   
    return (
        <div>
            <div>
                <FaArrowAltLeft onClick={PrevPicture}/>
                <FaArrowAltRight onClick={NextPicture}/>
            </div>
            <div>
                { PicturesTab.map((slide, index) => {
                    return (
                        <div> 
                            <img src= {slide.pictures} alt='slides image '/>
                        </div>    
                    );
                })};
            </div>
        </div>

    )};

export default Carousel