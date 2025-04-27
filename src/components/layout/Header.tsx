/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import './Header.css'
interface Props {

};

const Header: FC<Props> = ({ }) => {
    return (
        <Fragment>
            <header>
                <nav>
                    <div className="container">
                        <a href="#" className="logo">M. Mubtasim</a>

                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                        <ul className="nav-links">
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#skills">Skills</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                        <button className="contact-button" >
                        <Link href={'/#contact'} id="header-contact-button">Contact Me</Link>
                        </button>
                        
                    </div>
                </nav>
               
            </header>
            <nav>
            <div className="container">
                <a href="#" className="logo">M. Mubtasim</a>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="contact-button">Contact Me</button>
            </div>
        </nav>
        </Fragment>
    )
};

export default Header;