import React from 'react';


const Index = ({appart}) => {
    return (

        <div className='all-flat' >
        <div>
            <a href="#" className='single-flat'>
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
