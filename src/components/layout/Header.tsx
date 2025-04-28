"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useToggle } from 'usehooks-ts';

const Header = () => {
    const [showMobileNav, toggle] = useToggle();

    return (
        <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
            <nav className="h-16">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link 
                        href="/home" 
                        className="text-primary-500 text-xl font-bold no-underline"
                    >
                        M. Mubtasim
                    </Link>

                    {/* Hamburger Menu */}
                    <button 
                        className="md:hidden flex flex-col cursor-pointer ml-4"
                        onClick={toggle}
                    >
                        <span className={`h-0.5 w-6 bg-white mb-1 transition-transform duration-300 ${showMobileNav ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`h-0.5 w-6 bg-white mb-1 transition-opacity duration-300 ${showMobileNav ? 'opacity-0' : ''}`}></span>
                        <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${showMobileNav ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {/* Navigation Links */}
                    <ul className={`md:flex md:gap-4 md:static md:bg-transparent md:p-0 md:w-auto
                        ${showMobileNav ? 'flex' : 'hidden'}
                        absolute top-16 left-0 w-full bg-gray-900 p-4 flex-col
                        md:flex-row items-center z-40`}
                    >
                        <li><Link href="/home#about" className="text-white hover:text-primary-500 transition-colors duration-300">About</Link></li>
                        <li><Link href="/home#skills" className="text-white hover:text-primary-500 transition-colors duration-300">Skills</Link></li>
                        <li><Link href="/projects" className="text-white hover:text-primary-500 transition-colors duration-300">Projects</Link></li>
                        <li><Link href="/home#contact" className="text-white hover:text-primary-500 transition-colors duration-300">Contact</Link></li>
                    </ul>

                    {/* Contact Button */}
                    <Link 
                        href="/home#contact"
                        className="hidden md:inline-block px-5 py-2.5 text-base font-bold text-primary-500 
                            border-2 border-primary-500 rounded-md hover:text-primary-600 hover:border-primary-600
                            transition-colors duration-300 bg-transparent"
                    >
                        Contact Me
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;