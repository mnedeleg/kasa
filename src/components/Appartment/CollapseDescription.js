import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const CollapseDescription = ({ carouselDescription, title }) => {

  const collapseDescription = carouselDescription ;
  const [active, setActive] = useState(carouselDescription)

  // const [clicked, setClicked] = useState(false)
  // const toggle = (i) => {
  //   if(clicked === i) {
     
  //     return setClicked(null)
  //   }
  //   setClicked(i)

  // }

  console.log(carouselDescription)
 
  return (
      <div className='collapse-section'>

        <div className='collapse-heading'>
          <div className='collapse-heading-container'>
            <div>{title}</div>
            <span className= "testUp" onClick={() => setActive(carouselDescription)}>{<FaAngleUp/>}</span>
            <span className= "testDown" onClick={() => setActive(carouselDescription)}>{<FaAngleDown/>}</span>
          </div>
        </div>

        <div className={(active === carouselDescription ? "show" : "" + "collapse-content")}>
          <div className='collapse-content-container'>
            <div>{collapseDescription}</div>
          </div>
        </div>
 
      </div>

  )};

export default CollapseDescription