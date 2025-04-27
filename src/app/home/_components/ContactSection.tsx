/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

"use client"
import React, { FC, Fragment } from 'react';
import './contact.css'
interface Props {

};

const ContactSection: FC<Props> = ({ }) => {
    return (
        <Fragment>
            <section id="contact" className="section-alt">
                <div className="container">
                    <h2>Get In Touch</h2>
                    <div className="contact-grid">
                        <div className="contact-form">
                            <form id="contactForm">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required placeholder="Your Name" minLength={6}
                                        maxLength={35} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required placeholder="your@email.com"
                                        minLength={7} maxLength={50} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" required placeholder="Your message here..."
                                        maxLength={2500} minLength={25}></textarea>
                                </div>
                                <button type="submit" className="btn primary">Send Message</button>
                            </form>
                        </div>

                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <h4>Email</h4>
                                <a href="mailto:mubtasimf443@gmail.com">mubtasimf443@gmail.com</a>
                            </div>

                            <div className="contact-item">
                                <i className="fab fa-github"></i>
                                <h4>GitHub</h4>
                                <a href="https://github.com/Mubtasimf443" target="_blank">Mubtasimf443</a>
                            </div>
                            <div className="contact-item">
                                <i className="fab fa-twitter"></i>
                                <h4>X Twitter</h4>
                                <a href="https://x.com/MubtasimFu11492" target="_blank">@mubtasim</a>
                            </div>
                            <div className="contact-item">
                                <i className="fab fa-upwork"></i>
                                <h4>Upwork</h4>
                                <a href="https://www.upwork.com/freelancers/~01d88c06387ca7603a?mp_source=share"
                                    target="_blank">View Upwork
                                    Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default ContactSection;