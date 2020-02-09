import React, { Fragment } from 'react';
import Link from 'next/link';
import logo from '../public/static/images/logo.png';


const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand f-left" href="/">
                        <img className="logo" src={logo} />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Support</a>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Guides</a>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link href="/">
                                    <button type="button" className="btn btn-outline-info">Log Out</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* <a className="navbar-brand f-left" href="#">Country</a> */}
                    <div className="input-group-overlay">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </Fragment>
    );
};


export default Header;
