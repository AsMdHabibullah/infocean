import React, { Fragment } from 'react';
import Link from 'next/link';


const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand f-left" href="#">Infocean</a>
                    <div className="collapse navbar-collapse f-right" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Features</a>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Post</a>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Get Started!</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};


export default Header;
