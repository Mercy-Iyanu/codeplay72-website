import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import Button from './button';


export default function NavBar() {
    return (
        <nav className="text-black p-4 pb-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" passHref>
                    <span className="text-xl font-bold cursor-pointer logo-text">codePlay72</span>
                </Link>

                {/* Navigation Links */}
                <div className="space-x-4 flex">
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
                    <Button />
                </div>
            </div>

        </nav>

    );
}
