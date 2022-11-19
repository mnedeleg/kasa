import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const CollapseEquipments = ({ carouselEquipments, title, active, setActive}) => {

  const collapseEquipments = carouselEquipments;

  console.log(carouselEquipments)
 
  return (
    <div className='collapse-section'>

    <div className='collapse-heading'>
      <div className='collapse-heading-container'>
        <div>{title}</div>
        <span onClick={() => setActive(title)}>{<FaAngleDown/>}</span>
      </div>
    </div>

    <div className={(active === title ? "show" : "" + "collapse-content")}>
      <div className='collapse-content-container'>
        <div>{collapseEquipments}</div>
      </div>
    </div>

  </div>
  )};

export default CollapseEquipments