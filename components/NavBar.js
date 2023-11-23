import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';


export const NavBar = () => {
    return (
        <nav className="text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" passHref>
                    <span className="text-xl font-bold cursor-pointer theme_color">codePlay72</span>
                </Link>

                {/* Navigation Links */}
                <div className="space-x-4">
                    <Link href="/testimonials" passHref>
                        <span className="cursor-pointer">Testimonials</span>
                    </Link>
                    <Link href="/courses" passHref>
                        <span className="cursor-pointer">Courses</span>
                    </Link>
                    <Link href="/about" passHref>
                        <span className="cursor-pointer">About Us</span>
                    </Link>
                    <Link href="/signin" passHref>
                        <span className="cursor-pointer">Sign In</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
