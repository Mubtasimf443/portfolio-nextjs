/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

"use client"
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import './projects.css'
interface Props {

};

const ProjectsSection: FC<Props> = ({ }) => {
    return (
        <Fragment>
            <section className="projects-section">
                <div className="container">
                    <h2>Projects</h2>


                    <div className="projects-grid">

                        <div className="project-card">
                            <img src="/static/img/gojushinryu.com_control-panal.png"
                                alt="Project 1" className="project-image" style={{ objectPosition: 'top center' }} loading="lazy" />
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
                            <img src="/static/img/gojushinryu.website.png" alt="Project 2" className="project-image" loading="lazy" />
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
                            <img src="/static/img/elementor_clone.png" alt="Project 3" className="project-image" loading="lazy" />
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

                    </div>

                    <button className="load-more-btn" >
                        <Link
                            href={'/projects'} >
                            Load More
                        </Link>

                    </button>
                </div>
            </section>


        </Fragment>
    )
};

export default ProjectsSection;