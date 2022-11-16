import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const CollapseEquipments = ({ carouselEquipments }) => {

  const [current, setCurrent] = useState(0);
  const collapseEquipments = carouselEquipments;

  console.log(carouselEquipments)
 
  return (
      <div>
        <div>Équipement</div>
        <div>{collapseEquipments}</div>
      </div>

  )};

export default CollapseEquipments