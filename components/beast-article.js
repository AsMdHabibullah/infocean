import React from 'react';
import img from '../public/static/images/big_img_1.jpg';


const BestArticle = () => {
    return (
        <div className="site-section">
            <div className="container">
                <h2 className="text-center font-weight-bold">Best Article</h2>
                <div className="post-entry d-flex bg-light">
                    <div className="thumbnail">
                        <img className="best-article" src={img} />
                    </div>
                    <div className="contents ml-5">
                        <span className="d-block">Topic: JavaScript</span>
                        <h2 className="font-weight-bold">
                            <a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                        <div className="post-meta">
                            <span className="d-block">
                                <a href="#">Dave Rogers</a>
                            </span>
                            <span className="date-read">Jun 14</span>
                            <span className="date-read ml-3">Comments: 5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BestArticle;
