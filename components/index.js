import React, { Fragment } from 'react';
import Head from 'next/head'
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return (
        <Fragment>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Ifocean - Build your profile.</title>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                <link rel="stylesheet" href="css/style.css" />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    );
};


export default Layout;
