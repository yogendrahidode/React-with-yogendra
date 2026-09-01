import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#081827] border-t border-gray-700">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                <div className="md:flex md:justify-between">

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-3xl font-bold">
                                    &lt;/&gt;
                                </span>

                                <span className="text-white text-2xl font-bold">
                                    Coder
                                </span>
                            </div>
                        </Link>

                        <p className="mt-4 text-gray-400 max-w-xs">
                            Learn, build and grow with code.
                            Turn your ideas into reality.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        {/* Resources */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-orange-500 uppercase">
                                Resources
                            </h2>

                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        to="/"
                                        className="hover:text-orange-500 duration-200"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        to="/about"
                                        className="hover:text-orange-500 duration-200"
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/contact"
                                        className="hover:text-orange-500 duration-200"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-orange-500 uppercase">
                                Follow Us
                            </h2>

                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        to="/github"
                                        className="hover:text-orange-500 duration-200"
                                    >
                                        Github
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="#"
                                        className="hover:text-orange-500 duration-200"
                                    >
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-orange-500 uppercase">
                                Legal
                            </h2>

                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        to="#"
                                        className="hover:text-orange-500 duration-200"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="#"
                                        className="hover:text-orange-500 duration-200"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

                {/* Bottom Section */}
                <div className="sm:flex sm:items-center sm:justify-between">

                    <span className="text-sm text-gray-400 sm:text-center">
                        © 2026
                        <span className="text-orange-500 ml-1">
                            Coder
                        </span>
                        . All Rights Reserved.
                    </span>

                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                        <Link
                            to="#"
                            className="text-gray-400 hover:text-orange-500 duration-200"
                        >
                            Facebook
                        </Link>

                        <Link
                            to="#"
                            className="text-gray-400 hover:text-orange-500 duration-200"
                        >
                            Discord
                        </Link>

                        <Link
                            to="#"
                            className="text-gray-400 hover:text-orange-500 duration-200"
                        >
                            Twitter
                        </Link>

                        <Link
                            to="/github"
                            className="text-gray-400 hover:text-orange-500 duration-200"
                        >
                            GitHub
                        </Link>

                    </div>
                </div>

            </div>
        </footer>
    );
}