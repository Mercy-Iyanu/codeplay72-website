import React from 'react';
import Image from 'next/image';
import WatchwordIcon from './Watchwords-icon';


export default function HeroSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center bg-custom-green text-white relative">
            <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left relative z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    A Digital <span className='theme-color'>Playground</span> For Every <span className='secondary-color'>Child</span> to <span className='theme-color'>Learn and Play</span>
                </h1>
                <h2 className="text-lg md:text-xl font-light">
                    Codeplay72 helps with Endless possibilities for every child to learn and Grow
                </h2>
                <WatchwordIcon />
            </div>
            <div className="blob"></div>
        </section>


    )
}
