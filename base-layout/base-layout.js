import React, { Fragment } from 'react';
import Head from 'next/head'
import HeaderLoad from './header-load';
import favicon from '../public/static/images/favicon.png'




const Layout = props => {
    return (
        < Fragment >
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link href={favicon} rel="shortcut-icon" />
                <title>Ifocean - Build your profile.</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
                <script src="https://kit.fontawesome.com/a6aba9b613.js" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="css/style.css" />

            </Head>

            {HeaderLoad(props.children)}
            {props.children}

        </Fragment >
    );
};


export default Layout;

