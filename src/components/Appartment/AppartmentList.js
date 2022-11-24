import React from 'react';
import appartementListData from "../../data/kasa-datas.json"
import Appartment from "./index"

const AppartmentList = () => {
 
    return (
        <div className='all-flat' >
             {appartementListData.map((appart) => <Appartment key={appart.id} appart={appart}/>  )}
                
        </div>
    );
}

export default AppartmentList;
