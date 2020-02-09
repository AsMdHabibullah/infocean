import React from 'react';


const ExtraFooter = () => {
    return (
        <footer className="container extra-footer text-center mt-5">
            <a className="" href="/">Help</a>
            <a className="ml-3" href="/">Privacy</a>
            <a className="ml-3" href="/">Terms</a>
            <a className="ml-3" href="/">About</a>
            <div className="footer-copyright text-center py-3">
                <p>&copy; All rights reserved <a href="https://asmdhabibullah.com" target="_blank"> - As Md Habibullah.</a></p>
            </div>
            <a className="btn-scroll-top show" href="#top" data-scroll="">
                {/* <span className="btn-scroll-top-tooltip text-muted font-size-sm mr-2">
                </span> */}
                <i class="fas fa-arrow-up"></i>
            </a>
        </footer>
    );
};


export default ExtraFooter;
