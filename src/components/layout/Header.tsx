/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import './Header.css'
import { useToggle } from 'usehooks-ts'
interface Props {

};

const Header: FC<Props> = ({ }) => {
    const [showMobileNav, toggle] = useToggle();
    return (
        <Fragment>
            <header>
                <nav>
                    <div className="container">
                        <a href="/home" className="logo">M. Mubtasim</a>
                        <button className={"hamburger " + (showMobileNav ? "toggle" : "")} onClick={toggle}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>

                        <ul className={"nav-links " + (showMobileNav ? "active" : "")}>
                            <li><a href="/home#about">About</a></li>
                            <li><a href="/home#skills">Skills</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/home#contact">Contact</a></li>
                        </ul>
                        <button className="contact-button" >
                            <Link href={'/home#contact'} id="header-contact-button">Contact Me</Link>
                        </button>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
};

export default Header;