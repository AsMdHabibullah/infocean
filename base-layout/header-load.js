import React from 'react';
import GetStarteHeader from '../getstarted/get-starte-header';
import Header from '../components/header';


const HeaderLoad = props => {
    const pet = props.type.name
    if (pet === 'GetStarted') {
        return <GetStarteHeader />
    }
    return <Header />

};


export default HeaderLoad;
