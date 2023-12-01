import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center">
            {/* Left side with header texts */}
            <div className="md:w-1/2 p-4 md:p-8 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">A Digital <span className='theme_color'>Playground</span> For Every <span className='secondary_color'>Child</span> to <span className='theme_color'>Learn and Play</span></h1>
                <h2 className="text-lg md:text-xl font-light">Codeplay72 helps with Endless possibilities for every child to learn and Grow</h2>
            </div>

            {/* Right side with hero image */}
            <div className="md:w-1/2">
                <Image src="/hero.svg" width={100} height={100} layout="responsive" />
            </div>
        </section>
    )
}
