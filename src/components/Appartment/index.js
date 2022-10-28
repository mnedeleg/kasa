import React from 'react';

const Index = ({appart}) => {
    return (
        <div>
            <img src={appart.cover} alt= {appart.title}/>
            <h2>{appart.title}</h2>
        </div>
    );
}

export default Index;
