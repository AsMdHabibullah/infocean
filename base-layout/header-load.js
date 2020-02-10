import React from 'react';
import GetStarteHeader from '../getstarted/get-starte-header';
import Header from '../components/header';


const HeaderLoad = props => {
    const header_name = props.type.name
    if (header_name === 'Home') {
        return <Header />
    } else if (header_name === 'GetStarted') {
        return <GetStarteHeader />
    }
    return ''
};


export default HeaderLoad;
