import React from 'react';
import img from '../public/static/images/big_img_1.jpg';

const BestWriter = () => {
    return (
        <div className="post-entry d-flex bg-light">
            <div className="thumbnail">
                <img className="writer" src={img} />
            </div>
            <div className="contents">
                <h2>
                    <a href="blog-single.html">As Md Habibullah</a>
                </h2>
                <div className="post-meta">
                    <span className="date-read">Join date: Jan-2020</span>
                </div>
            </div>
        </div>

    );
};


export default BestWriter;


