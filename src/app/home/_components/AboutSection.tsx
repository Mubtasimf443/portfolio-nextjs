/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import './about.css'
interface Props {

};

const AboutSection :FC<Props> = ({}) => {
  return (
    <Fragment>
         <section id="about">
        <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c" alt="Professional headshot" />
                </div>
                <div className="about-text">
                    <p id="my-short-bio-text">
                        I'm a Senior Full Stack Developer with over a year of professional experience, passionate about
                        building modern,
                        scalable web applications. My journey began with JavaScript, and I've since honed my skills in
                        Node.js for backend
                        development and embraced frontend frameworks like React, Remix, Redux, and Next.js. I've
                        successfully built projects
                        such as an Elementor clone and a robust photo editor, and developed 200+ APIs using both Node.js
                        and Python (with
                        frameworks like FastAPI and Flask). My technical toolkit includes TypeScript, JSON Web Tokens,
                        bcrypt, Mongoose, Helmet,
                        and expertise with databases such as PostgreSQL, MySQL, MongoDB, and Redis. I'm continuously
                        expanding my skill set by
                        learning Rust, Java, and React Native, and I'm well-versed in DevOps practices with AWS, Ubuntu,
                        Nginx, and Linux.
                        Additionally, I leverage modern tools like ChatGPT, Deepseek, and Replit, and I’m exploring
                        technologies like GraphQL,
                        Nest.js, PyTorch, and WebSockets to deliver quality, innovative solutions for my clients
                    </p>
                   
                </div>
            </div>
        </div>
    </section>
    </Fragment>
  )
};

export default AboutSection;