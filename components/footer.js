import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-light">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <a className="btn-scroll-top show" href="#top" data-scroll="">
                {/* <span className="btn-scroll-top-tooltip text-muted font-size-sm mr-2">

                </span> */}
                <i class="fas fa-arrow-up"></i>
            </a>
            <div className="footer-copyright text-center py-3">
                <p>&copy; All rights reserved <a href="https://asmdhabibullah.com" target="_blank"> - As Md Habibullah.</a></p>
            </div>

        </footer>
    );
};


export default Footer;
