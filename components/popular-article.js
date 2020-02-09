import React from 'react';


const PopularArticle = () => {
    return (
        <section className="side-scroll">
            <div className="trend-entry d-flex">
                <div className="number align-self-start">01</div>
                <div className="trend-contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                        <span className="d-block">
                            <a href="#">Dave Rogers</a>
                        </span>
                        <span className="date-read">Jun 14</span>
                        <span className="date-read ml-3">Comments: 5</span>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PopularArticle;
