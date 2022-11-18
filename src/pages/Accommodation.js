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
         <p>{ appt.tag} </p>     
         <div><CollapseDescription carouselDescription={appt.description} title="Description"/></div>
         <div><CollapseEquipments carouselEquipments={appt.equipments} title="Equipements"/></div>
         {/* <p> {appt.description} </p>
         <p>{ appt.equipments} </p>             */}
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
