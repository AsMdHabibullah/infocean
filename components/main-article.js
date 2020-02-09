import React from 'react';
import AllArticle from './all-articles';
import RecentPublish from './recent-publish';
import PopularArticle from './popular-article';
import BestWriter from './best-writer';
import ExtraFooter from './extra-footer';


const MainArticles = () => {
    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Articles</h2>
                        </div>
                        <AllArticle />
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Recent Published</h2>
                        </div>
                        <RecentPublish />
                    </div>

                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Popular Articles</h2>
                        </div>
                        <PopularArticle />
                    </div>

                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="writer-section-title">
                            <h2>Best Writers</h2>
                        </div>
                        <BestWriter />
                    </div>
                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <ExtraFooter />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MainArticles;
