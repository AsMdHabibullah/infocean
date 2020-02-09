import React from 'react';
import '../public/style.css';
import '../public/style.sass';
import '../public/static/scss/style.scss';
import Layout from '../base-layout/base-layout';
import GetStarted from '../getstarted/main';
import Home from '../components/home';


const Index = () => {
    return (
        <Layout>
            <GetStarted />
            {/* <Home /> */}
        </Layout>

    );
};


export default Index;
