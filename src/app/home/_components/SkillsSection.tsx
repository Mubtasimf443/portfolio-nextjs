/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import './skills.css'
interface Props { }

const SkillsSection: FC<Props> = ({ }) => {
    return (
        <Fragment>
            <section id="skills" className="section-alt">
                <div className="container">
                    <h2>Technical Skills</h2>

                    {/* Programming Languages */}
                    <div className="skills-category">
                        <h3>Programming Languages</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                    alt="JavaScript"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>JavaScript</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                                    alt="TypeScript"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>TypeScript</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                                    alt="Python"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Python</h4>
                            </div>
                            <div className="skill-card">
                                <i className="fa-brands fa-golang" style={{ color: '#009485' }}></i>
                                <h4>Golang</h4>
                            </div>
                            <div className="skill-card">
                                <i className="fa-solid fa-database" style={{ color: '#d47131' }}></i>
                                <h4>SQL</h4>
                            </div>
                        </div>
                    </div>

                    {/* Frontend Development */}
                    <div className="skills-category">
                        <h3>Frontend Development</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                    alt="React"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>React</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/nextjs.svg"
                                    alt="Next.js"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Next.js</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/tailwind.svg"
                                    alt="Tailwind CSS"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Tailwind CSS</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                                    alt="Bootstrap"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Bootstrap</h4>
                            </div>
                        </div>
                    </div>

                    {/* Backend Development */}
                    <div className="skills-category">
                        <h3>Backend Development</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <i className="fa-brands fa-node-js" style={{ color: 'green' }}></i>
                                <h4>Node.js</h4>
                            </div>
                            <div className="skill-card">
                                <i className="fa-solid fa-bolt-lightning" style={{ color: '#009485' }}></i>
                                <h4>FastAPI</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/flask.svg"
                                    alt="Flask"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Flask</h4>
                            </div>
                            <div className="skill-card">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 500 500"
                                    className="skill-card-icon"
                                    width={64}
                                    height={64}
                                >
                                    {/* SVG Content */}
                                </svg>
                                <h4>Gin Gonic</h4>
                            </div>
                        </div>
                    </div>

                    {/* Database Technologies */}
                    <div className="skills-category">
                        <h3>Database Technologies</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                                    alt="PostgreSQL"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>PostgreSQL</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/mysql.svg"
                                    alt="MySQL"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>MySQL</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="https://img.icons8.com/nolan/96/mongo-db.png"
                                    alt="MongoDB"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>MongoDB</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/redis.svg"
                                    alt="Redis"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Redis</h4>
                            </div>
                        </div>
                    </div>

                    {/* DevOps & Cloud */}
                    <div className="skills-category">
                        <h3>DevOps & Cloud</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <Image
                                    src="data:image/png;base64,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"
                                    alt="AWS EC2"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>AWS EC2</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="https://img.icons8.com/?size=100&id=zrNxSf4ltkGV&format=png&color=149BDB"
                                    alt="Linux"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Ubuntu</h4>
                            </div>
                        </div>
                    </div>

                    {/* AI Skills */}
                    <div className="skills-category">
                        <h3>AI Skills</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                                    alt="ChatGPT"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>ChatGPT</h4>
                            </div>
                            <div className="skill-card">
                                <img className="skill-card-icon"
                                    src="data:image/png;base64,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"
                                    alt="Google Gemini Ai"
                                    loading="lazy"
                                />

                                <h4>GEMINI</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="https://img.icons8.com/?size=100&id=YWOidjGxCpFW&format=png&color=536dfe"
                                    alt="DEEPSEEK"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>DEEPSEEK</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/replit.svg"
                                    alt="Replit"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Replit</h4>
                            </div>



                        </div>
                    </div>

                    {/* Web Tools */}
                    <div className="skills-category">
                        <h3>Web Tools I understand</h3>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/google-analytics.png"
                                    alt="Google Analytics 4"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Google Analytics 4</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/google-tag-manager.png"
                                    alt="Google Tag Manager"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Google Tag Manager</h4>
                            </div>
                            <div className="skill-card">
                                <Image
                                    src="/static/icon/google-web-search.png"
                                    alt="Google Search Console"
                                    width={64}
                                    height={64}
                                    className="skill-card-icon"
                                />
                                <h4>Google Search Console</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default SkillsSection;