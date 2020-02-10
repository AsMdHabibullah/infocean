import React, { Fragment } from 'react';
import joyfull from '../public/static/images/joyfull.jpg'
import curious from '../public/static/images/curious.jpg';


const HomePage = () => {
    return (
        <Fragment>
            <div className="banner">
                <div className="container mb-5">
                    <h1 className="font-weight-semibold">Welcome To Infocean.</h1>
                    <h6 className="font-weight-normal text-muted pb-3">Understand what you want to be? that will help you to be smarter!</h6>
                    <div className="row article-category">
                        <div className="col-xl-8 col-md-8 col-sm-8 offset-2 text-center m-5">
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">Technology</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">HTML</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">CSS</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">SCSS</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">SASS</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">Bootstrap</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">METRIAL-UI</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">JavaScript</span>
                            </a>
                            <a href="/" className="category">
                                <i className="far fa-stop-circle"></i>
                                <span className="ml-1 mr-3">ReactJs</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-opacity-light mr-1">Get started</button>
                        <button className="btn btn-opacity-success ml-1">Sign in</button>
                    </div>
                </div>
            </div>


            <div className="content-wrapper">
                <div className="container">
                    <section className="features-overview" id="features-section" >
                        <div className="content-header">
                            <h2>How does it works</h2>
                            <h6 className="section-subtitle text-muted">From top of the category, choose your category and write your expertise.</h6>
                        </div>
                        <div className="d-md-flex justify-content-between">
                            <div className="grid-margin d-flex justify-content-start">
                                <div className="features-width">
                                    <h5 className="py-3">Aleart!</h5>
                                    <p className="text-muted">You can't write adult related contend. If you write like this then your account wil be band automiticaly.</p>
                                </div>
                            </div>
                            <div className="grid-margin d-flex justify-content-center">
                                <div className="features-width">
                                    <h5 className="py-3">Career!</h5>
                                    <p className="text-muted">This site will show you as an article writer and your chosen category related skills expert and you can share your profile link with others.</p>
                                </div>
                            </div>
                            <div className="grid-margin d-flex justify-content-end">
                                <div className="features-width">
                                    <h5 className="py-3">API!</h5>
                                    <p className="text-muted">Software developer can create his own new blog with his article API.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="digital-marketing-service" id="digital-marketing-section">
                        <div className="row align-items-center m-5">
                            <div className="col-12 col-lg-7 grid-margin grid-margin-lg-0" data-aos="fade-right">
                                <h3 className="m-0">No ads. No problems!</h3>
                                <p>Your privacy stays yours. We don’t sell your data or target you with others, Ever.</p>
                                <div className="col-lg-7 col-xl-6 p-0">
                                    <p className="py-4 m-0 text-muted">Our thinking is different and to you our expectation of course different.</p>
                                    <p className="font-weight-medium text-muted">Try your best and will be you gain your apex.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0" data-aos="fade-left">
                                <img src={joyfull} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row align-items-center m-3">
                            <div className="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0" data-aos="fade-right">
                                <img src={curious} alt="" className="img-fluid" />
                            </div>
                            <div className="col-12 col-lg-7 grid-margin grid-margin-lg-0" data-aos="fade-left">
                                <h3 className="m-0">Curious readers and growing.</h3>
                                <div className="col-lg-9 col-xl-8 p-0">
                                    <p className="py-4 m-0 text-muted">Stay and find your curiosity about what you want to do. When you find, no one can stop you.</p>
                                    <p className="pb-2 font-weight-medium text-muted">Smart is like this!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </Fragment>
    );
};


export default HomePage;
