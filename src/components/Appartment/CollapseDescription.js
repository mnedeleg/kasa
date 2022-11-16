import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const CollapseDescription = ({ carouselDescription }) => {

  const [current, setCurrent] = useState(0);
  const collapseDescription = carouselDescription;

  console.log(carouselDescription)
 
  return (
      <div>
        <div>Description</div>
        <div>{collapseDescription}</div>
      </div>

  )};

export default CollapseDescription