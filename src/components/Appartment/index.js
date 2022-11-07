import React from 'react';
import { link } from 'react-router-dom';


const Index = ({appart}) => {
      
    const singleAppartment = (id) =>
    console.log("Click vers le logement");
    <link to ={`/logement/${appart.id}`}>test</link>;

    return (
        
        <div className='all-flat' >
        <div className='singleflat-test'>
            <a onClick = {singleAppartment}href="/logement/:id"  className='single-flat'>
                <div>
                    <img className='single-flat-img' src={appart.cover} alt= {appart.title}/>
                </div>
       
                <h2 className='single-flat-title'>{appart.title}</h2>
            </a>
        </div>
        </div>
    );
}

export default Index;
