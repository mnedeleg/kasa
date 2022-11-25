import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import appartementListData from "../data/kasa-datas.json"
import Carousel from "../components/Appartment/Carousel"
import CollapseDescription from "../components/Appartment/CollapseDescription"
import StarRating from '../components/Appartment/Star';

const SingleAppartment = () => {
    const [appt, setAppt] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate();
   

    useEffect(() => {
        
        const appartment = appartementListData.find((app) => app.id === id);

        if (!appartment) {
        
            return navigate('/page-introuvable')
        }
        setAppt(appartment)
    },[id, navigate])

    if (appt === null) return null;

    const host = Object.values(appt.host)
    const hostName = host[0]
    const hostPicture = host[1]

    return (

        <div className='home'>

            <Carousel slides={appt.pictures} />

            <div className='intro'>
                <div className='accomodation-heading'>
                    <div className='accomodation-heading-title'>
                        <h1 className='accomodation-title'> {appt.title} </h1>
                        <p className='accomodation-location'> {appt.location} </p>
                    </div>
                    <div className='tag'>
                        {appt.tags.map((tag, i) =>
                            <p key={i} className='tag-style'>{tag}</p>)}
                    </div>
                </div>

                <div className='host-section'>
                    <div className='host-profile'>
                        <div className='host-section-name'>
                            {hostName}
                        </div>
                        <img src={hostPicture} className='host-section-img' alt="profil de l'hôte"/>
                             
                    </div>

                    <div className='star'>
                        <StarRating rating={appt.rating} />
                    </div>
                </div>

            </div>

            <div className='all-collapse-section'>

                <CollapseDescription title='Description' className='collapse-logement'>
                    {appt.description}
                </CollapseDescription>

                <CollapseDescription title='Équipements' className='collapse-logement'>
                    <ul>
                        {appt.equipments.map((equipment, i) =>
                            <li key={i} className='equipment-style'>{equipment}</li>
                        )}
                    </ul>
                </CollapseDescription>
            </div>

        </div>
    )
}

export default SingleAppartment;
