import React from 'react';
import NavBar from "../components/navBar/navBar"
import AppartmentList from "../components/Appartment/AppartmentList"
const Home = () => {
    return (
        <div>
        
            <div>
                <h1> Chez vous, partout et ailleurs </h1>
            </div>
            <AppartmentList/>
        </div>
    );
}

export default Home;
