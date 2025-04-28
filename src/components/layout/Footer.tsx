/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { FC, Fragment } from "react";

const Footer: FC = () => {
    return (
        <Fragment>
            <footer id="Footer" className="bg-slate-900 py-16 pb-4 flex static">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                        {/* Footer Info */}
                        <div className="footer-info">
                            <h3 className="text-xl font-bold text-gray-200 mb-4">
                                Muhammad Mubtasim
                            </h3>
                            <p className="text-gray-400">
                                Senior Full Stack Developer crafting exceptional web experiences.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-200 mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/home#about"
                                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/home#skills"
                                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/home#projects"
                                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/home#contact"
                                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-200 mb-4">
                                Connect
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 text-2xl hover:text-primary-500 transition-colors duration-300"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a
                                    href="https://www.upwork.com/freelancers/~01d88c06387ca7603a?mp_source=share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 text-2xl hover:text-primary-500 transition-colors duration-300"
                                >
                                    <i className="fab fa-upwork"></i>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 text-2xl hover:text-primary-500 transition-colors duration-300"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="text-center pt-8 border-t border-gray-800">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Muhammad Mubtasim. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>

    );
};

export default Footer;