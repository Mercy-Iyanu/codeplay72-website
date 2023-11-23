import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import { HeroSection } from './HeroSection';

export const Header = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold cursor-pointer theme_color">Codeplay72</h1>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="/testimonials">
                        <a>Testimonials</a>
                    </Link>
                    <Link href="/courses">
                        <a>Courses</a>
                    </Link>
                    <Link href="/about">
                        <a>About us</a>
                    </Link>
                    <Link href="/signin">
                        <a>Sign in</a>
                    </Link>
                    {/* Add more navigation links as needed */}
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden absolute top-16 left-0 bg-gray-800 p-4 w-full">
                        <Link href="/testimonials">
                            <a className="block text-white mb-2">Testimonials</a>
                        </Link>
                        <Link href="/courses">
                            <a className="block text-white mb-2">Courses</a>
                        </Link>
                        <Link href="/about">
                            <a className="block text-white mb-2">About us</a>
                        </Link>
                        <Link href="/signin">
                            <a className="block text-white">Sign in</a>
                        </Link>
                        {/* Add more navigation links as needed */}
                    </nav>
                )}
            </div>

            <HeroSection></HeroSection>
        </header>

    )
}
