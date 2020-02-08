import React from 'react';
import BestArticle from './beast-article';
import MainArticles from './main-article';


const Home = () => {

    return (
        <div className="site-wrap">
            <div className="site-section py-0">
                <div className="owl-carousel hero-slide owl-style">
                    <BestArticle />
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <MainArticles />
                </div>
            </div>
        </div>
    );
};


export default Home;
