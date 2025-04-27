/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import './hero.css'
interface Props {

};

const HeroSection :FC<Props> = ({}) => {
  return (
    <Fragment>
        <section id="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Muhammad Mubtasim</span></h1>
                <h2>Senior Full Stack Developer</h2>
                <p>
                    Passionate about building modern web applications with JavaScript/TypeScript,
                    React, Node.js, and Python. Let's create something amazing together!
                </p>
                <div className="hero-buttons">
                    <button className="btn primary">View Projects</button>
                    <button className="btn outline">
                        <i className="fab fa-github"></i> GitHub
                    </button>
                    <button className="btn outline">
                        <i className="fab fa-twitter"></i> X Twitter
                    </button>
                </div>
            </div>
            <div className="hero-image"  >
                <img  src="/static/img/600X600.jpg"  alt="Muhammad Mubtasim Fuad - Full Stack Developer From Bangladesh" loading="lazy" />
            </div>
        </div>
    </section>
    </Fragment>
  )
};

export default HeroSection;