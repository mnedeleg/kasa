import React from 'react';


const Index = ({appart}) => {
      
    const handleClick = () =>
    console.log("Hello you");

    return (

        <div className='all-flat' >
        <div>
            <a onClick ={handleClick} href="/logement/:id" className='single-flat'>
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
