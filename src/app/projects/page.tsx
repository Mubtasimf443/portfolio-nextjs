/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import './projects.css'
import { Metadata } from 'next';
interface Props {

};
export const metadata :Metadata ={
    title :'Projects of Muhammad Mubtasim'
}
const page: FC<Props> = ({ }) => {
    return (
        <Fragment>
            <section className="projects-section">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <img src="/static/img/gojushinryu.com_control-panal.png"
                                alt="Project 1" className="project-image" style={{ objectPosition: 'top center' }} loading='lazy' />
                            <div className="project-content">
                                <h3 className="project-title">Backend Admin Panal</h3>
                                <p className="project-description">
                                    I have build backend Admin Panal of a Gojushinryu International Martial Arts Website
                                </p>
                                <div className="project-links">

                                    <a href="https://github.com/Mubtasimf443/Gojushinryu-website">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="/static/img/gojushinryu.website.png" alt="Project 2" className="project-image" />
                            <div className="project-content">
                                <h3 className="project-title">Gojushinryu-website</h3>
                                <p className="project-description">
                                    This is Martial Arts School Website having the feature of use student management , ecommerce
                                    and else.
                                </p>
                                <div className="project-links">
                                    <a href="https://gojushinryu.com">Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="/static/img/elementor_clone.png" alt="Project 3" className="project-image" loading='lazy' />
                            <div className="project-content">
                                <h3 className="project-title">Elementor Clone</h3>
                                <p className="project-description">
                                    I had a plan to build something Like elementor page builder and I have made simple clone
                                    with JavaScript
                                </p>
                                <div className="project-links">
                                    <a href="#">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="/static/img/product_search_api_dem.png" alt="Project 4" className="project-image" loading='lazy' />
                            <div className="project-content">
                                <h3 className="project-title">Product Search Api</h3>
                                <p className="project-description">
                                    I have build a product search api using Nodejs and Expressjs and Mysql
                                </p>
                                <div className="project-links">
                                    <a href="https://github.com/Mubtasimf443/Advance-Product-Search-Api">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="/static/img/github.com_Mubtasimf443_fastapi-pdf-Processing-Backend.png" alt="Project 5" className="project-image" loading='lazy' />
                            <div className="project-content">
                                <h3 className="project-title">PDF Processing Backend API</h3>
                                <p className="project-description">
                                    I have build PDF Processing  Backend API's with Python FastAPI
                                </p>
                                <div className="project-links">
                                    <a href="https://github.com/Mubtasimf443/fastapi-pdf-Processing-Backend">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="/static/img/photo-editing-website-by-mern.onrender.com_.png" alt="Project 6" className="project-image" loading='lazy' />
                            <div className="project-content">
                                <h3 className="project-title">Photo Editing Tool</h3>
                                <p className="project-description">
                                    I have build Photo Editing Tool using Reactjs and Jim.js
                                </p>
                                <div className="project-links">
                                    <a href="https://github.com/Mubtasimf443/Photo-Editor-React.js">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default page;