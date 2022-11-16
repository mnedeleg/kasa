import React, { useState } from 'react';
import appartementListData from "../../data/kasa-datas.json";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const Collapse = ({ test }) => {

  const [current, setCurrent] = useState(0);
  const collapseDescription = test;

  console.log(test)
 
  return (
      <div>
        <div>Description</div>
        <div>{collapseDescription}</div>
       
      </div>

  )};

export default Collapse