import React, { useState } from 'react'
import { FaChevronRight} from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const picturesTab = slides;
    const length = picturesTab.length;
  

    const nextPicture = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    return (
        <div className='carousel'>
            <div className='img-container'> 
                <img className= "img-containter-single" src= {slides[current]} alt="images de l'intérieur de l'appartement"/>
                <div className="indicator" >{current + 1}/{length}</div>
            </div>    
            <div>
                <FaChevronLeft className='left-arrow' onClick={prevPicture}/>
                <FaChevronRight className='right-arrow' onClick={nextPicture}/>
            </div>
        </div>
    )};

export default Carousel