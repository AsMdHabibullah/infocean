import React from 'react';
import GetStarteHeader from '../getstarted/get-starte-header';
import Header from '../components/header';


const HeaderLoad = header => {
    const header_name = header.type.name
    if (header_name === 'Home') {
        return <Header />
    }
    return <GetStarteHeader />
};


export default HeaderLoad;
