import React from 'react';
import Banner from "../components/banner/Banner"
import AppartmentList from "../components/Appartment/AppartmentList"

const Home = () => {

    return (
        <div className='home'>
            <Banner/>
            <AppartmentList/>
        </div>
    );
}

export default Home;
