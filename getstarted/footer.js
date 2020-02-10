import React, { Fragment } from 'react';
import logo from '../public/static/images/logo.png';

const Footer = () => {
    return (
        <Fragment>
            <section className="container">
                <div className="row text-center">
                    <div className="col-12 col-md-6 col-lg-3 grid-margin">
                        <img src={logo} alt="" className="logo" />
                        <div className="pt-2">
                            <p className="text-muted m-0">support@infocean.org</p>
                            <p className="text-muted m-0">+86 1560 8807860</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 grid-margin">
                        <h5 className="pb-2">Get in Touch</h5>
                        <p className="text-muted">Don’t miss our tech related free advice!</p>
                        <form>
                            <input type="text" className="form-control" id="Email" placeholder="Email id" />
                        </form>
                        <div className="pt-3">
                            <button className="btn btn-dark">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 grid-margin">
                        <h5 className="pb-2">Our Guidelines</h5>
                        <a href="#"><p className="m-0 pb-2">Terms</p></a>
                        <a href="#" ><p className="m-0 pt-1 pb-2">Privacy policy</p></a>
                        <a href="#"><p className="m-0 pt-1 pb-2">Cookie Policy</p></a>
                        <a href="#"><p className="m-0 pt-1">Discover</p></a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 grid-margin">
                        <h5 className="pb-2">Our address</h5>
                        <p className="text-muted">Kunming<br />Yunnan, China.</p>
                        <div className="text-center">
                            <a href="#"><span className="m-2 fab fa-facebook"></span></a>
                            <a href="#"><span className="m-2 fab fa-twitter"></span></a>
                            <a href="#"><span className="m-2 fab fa-instagram"></span></a>
                            <a href="#"><span className="m-2 fab fa-linkedin"></span></a>
                        </div>
                    </div>
                </div>
                <a className="btn-scroll-top show" href="#top" data-scroll="">
                    <i className="fas fa-arrow-up"></i>
                </a>
                <footer className="border-top mt-3">
                    <p className="text-center text-muted pt-4">2020 &copy; All rights reserved<a className="px-1" href="https://asmdhabibullah.com" target="_blank"> - As Md Habibullah.</a></p>
                </footer>
            </section>
        </Fragment>
    );
};


export default Footer;
