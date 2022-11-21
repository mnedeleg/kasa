import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

import {useParams,  useNavigate} from "react-router-dom";
import appartementListData from "../data/kasa-datas.json"
import Appartment from "../components/Appartment/index"
import Carousel from "../components/Appartment/Carousel"
import picturesTab from "../data/kasa-datas.json"
import CollapseDescription from "../components/Appartment/CollapseDescription"
import StarRating from '../components/Appartment/Star';

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
    
    const host = Object.values(appt.host)
    const hostName = host[0]
    const hostPicture = host[1]
  
    return(
        
    <div className='home'>
      
        
      <Carousel slides ={appt.pictures}/>

      <div className='accomodation-heading'>
        <div  className='accomodation-heading-title'>
            <h1 className='accomodation-title'> {appt.title} </h1>            
            <p className='accomodation-location'> {appt.location} </p>
        </div>
            
        <div className='host-section'>
            <div className='host-section-name'>
                {hostName}
            </div>
            <img 
                src= {hostPicture} className='host-section-img' alt="photo de profil de l'hôtesse Nathalie Jean">
            </img>
         </div>
       
      </div>
      
      <div className='tag-star'>
         <div className='tag'>
            { appt.tags.map((tag) => <p className='tag-style'>{tag}</p>)} 
         </div>

         <div className='star'>
         <StarRating/>
         </div>
     </div>
        
         <div className='all-collapse-section'>
    
            <CollapseDescription title="Description" className="collapse-logement">
                 {appt.description}
            </CollapseDescription>

            <CollapseDescription title="Équipements" className="collapse-logement">
                <ul>
                    {appt.equipments.map((equipment) => <li className='equipment-style'>{equipment}</li> )} 
                </ul>
            </CollapseDescription>
         </div>

    </div> 
    )
}

export default SingleAppartment;
