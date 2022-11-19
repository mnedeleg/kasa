import React, { useEffect, useState } from 'react'
import {FaArrowAltRight, FaArrowAltLeft } from 'react-icons'

import {useParams,  useNavigate} from "react-router-dom";
import appartementListData from "../data/kasa-datas.json"
import Appartment from "../components/Appartment/index"
import Carousel from "../components/Appartment/Carousel"
import picturesTab from "../data/kasa-datas.json"
import CollapseDescription from "../components/Appartment/CollapseDescription"
import CollapseEquipments from "../components/Appartment/CollapseEquipments";

const SingleAppartment = () => {
    const [active, setActive] = useState("title")


    const [appt, setAppt] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(()=> {
        const appartment = appartementListData.find((app) => app.id === id);
        if(!appartment){
            return navigate("/page-introuvable")
        }
        setAppt(appartment)
    })

    if(appt === null) return null;
    
    return(
        
    <div className='home'>
      
        
      <Carousel slides ={appt.pictures}/>
       
         <h1> {appt.title} </h1>            
         <p> {appt.location} </p>    
         <div>{ appt.tags.map((tag) => <p className='test'>{tag}</p>)} </div>
        
         <div className='all-collapse-section'>
    
            <CollapseDescription title="Description">
                 {appt.description}
            </CollapseDescription>

            <CollapseDescription title="Équipements">
                <ul>
                    {appt.equipments.map((equipment) => <li>{equipment}</li> )} 
                </ul>
            </CollapseDescription>
         </div>
    
         <p> {appt.rating} </p>
         <div>
            <span class="fa-solid fa-star"></span>
            <span class="fa-solid fa-star"></span>
            <span class="fa-solid fa-star"></span>
            <span class="fa-solid fa-star"></span>
            <span class="fa-solid fa-star"></span>
         </div>
    </div> 
    )
}


{/* const SingleCardFlat = () => {

    return (
        <div>
            <Accommodation/>
        </div>
    );
} */}




export default SingleAppartment;
