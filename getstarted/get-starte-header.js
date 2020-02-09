import React from 'react';
import Link from 'next/link';
import logo from '../public/static/images/logo.png';


const GetStarteHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand f-left" href="/">
                    <img className="logo" src={logo} />
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Subscribe</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Sign in</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/">
                                <button type="button" className="btn btn-outline-info">Get Started</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default GetStarteHeader;
