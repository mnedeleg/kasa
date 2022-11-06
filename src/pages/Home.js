import React from 'react';
import NavBar from "../components/navBar/navBar"
import Banner from "../components/banner/banner"
import AppartmentList from "../components/Appartment/AppartmentList"
const Home = () => {

    return (
        <div>
            <Banner/>
            <AppartmentList/>
        </div>
    );
}

export default Home;
