import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


const Index = ({appart}) => {
      
    const singleAppartment = (id) =>
    console.log(id);
  

    return (
        
        <div className='single-flat  color-gradient'>
            <Link to={`/logement/${appart.id}`} className='single-flat'>
                
                <div>
                    
                    <img className='single-flat-img' src={appart.cover} alt= {appart.title}/>
                    
                </div>
       
                <h2 className='single-flat-title'>{appart.title}</h2>
            </Link>
        </div>
    );
}

export default Index;
