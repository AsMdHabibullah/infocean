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
                                    <button type="button" class="btn btn-outline-info">Join Free</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* <a className="navbar-brand f-left" href="#">Country</a> */}
                    <div class="input-group-overlay">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </Fragment>
    );
};


export default Header;
