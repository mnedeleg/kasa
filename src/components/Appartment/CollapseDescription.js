import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const CollapseDescription = ({ carouselDescription, title }) => {

  const collapseDescription = carouselDescription ;
  
  const [clicked, setClicked] = useState(false)
  const toggle = (i) => {
    if(clicked === i) {
     
      return setClicked(null)
    }
    setClicked(i)

  }

  console.log(carouselDescription)
 
  return (
      <div className='collapse-section'>

        <div className='collapse-heading'>
          <div className='collapse-heading-container'>
            <div>{title}</div>
            <span>{<FaAngleDown/>}</span>
          </div>
        </div>

        <div className='collapse-content'>
          <div className='collapse-content-container'>
            <div>{collapseDescription}</div>
          </div>
        </div>
 
      </div>

  )};

export default CollapseDescription