import React from 'react';


const Index = ({appart}) => {
      
    const singleAppartment = (id) =>
    console.log("Click vers le logement");

    return (

        <div className='all-flat' >
        <div>
            <a onClick = {singleAppartment} href="/logement/:id" className='single-flat'>
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
