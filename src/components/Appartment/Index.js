import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


const Index = ({appart}) => {
      
    const singleAppartment = (id) => {}
    
    return (
        
        <div className='single-flat'>
            <Link to={`/logement/${appart.id}`} className='single-flat-link'>
                <div className='single-flat-image-container'>
                    <img className='single-flat-img' src={appart.cover} alt= {appart.title}/>
                </div>
                <h2 className='single-flat-title'>{appart.title}</h2>
            </Link>
        </div>
    );
}

export default Index;
