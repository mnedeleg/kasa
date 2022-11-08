import React, { useEffect, useState } from 'react'

import {useParams,  useNavigate} from "react-router-dom";
import appartementListData from "../data/kasa-datas.json"
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
    <div>
         <h1> appart.pictures </h1>            
         <p> appart.location </p>    
         <p>{ appt.tag} </p>     
         <p> {appt.description} </p>
         <p>{ appt.equipments} </p>            
         <p> {appt.rating} </p>
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
