/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import './Footer.css'
interface Props {

};

const Footer: FC<Props> = ({ }) => {
    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-info">
                            <h3>Muhammad Mubtasim</h3>
                            <p>Senior Full Stack Developer crafting exceptional web experiences.</p>
                        </div>
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="/home#about">About</a></li>
                                <li><a href="/home#skills">Skills</a></li>
                                <li><a href="/home#projects">Projects</a></li>
                                <li><a href="/home#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-social">
                            <h3>Connect</h3>
                            <div className="social-links">
                                <a href="https://github.com"><i className="fab fa-github"></i></a>
                                <a href="https://www.upwork.com/freelancers/~01d88c06387ca7603a?mp_source=share"><i
                                    className="fab fa-upwork"></i></a>
                                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Muhammad Mubtasim. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;