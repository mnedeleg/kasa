import React, { useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const CollapseDescription = ({ children, title }) => {


  const [ active, setActive] = useState(false);
  const icon = active ? <FaAngleUp/> : <FaAngleDown/>

 
  return (
      <div className='collapse-section'>
        <div className='collapse-heading'>
          <div className='collapse-heading-container'>
            <div>{title}</div>
            <span onClick={() => setActive(!active)}>{icon}</span>
          </div>
        </div>

        <div className={(active ? 'show' : 'collapse-content')}>
          <div className='collapse-content-container'>
            <div>{children}</div>
          </div>
        </div>
      </div>
  )};

export default CollapseDescription