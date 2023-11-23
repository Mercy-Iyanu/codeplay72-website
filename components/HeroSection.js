import React from 'react';

export const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center">
            {/* Left side with header texts */}
            <div className="md:flex-1 p-4 md:p-8 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">A Digital Playground For Every Child to Learn and Play</h1>
                <h2 className="text-lg md:text-xl font-light">Codeplay72 helps with Endless possibilities for every child to learn and Grow</h2>
            </div>

            {/* Right side with hero image */}
            <div className="md:flex-1">
                <img src="/images/hero-image.png" alt="Hero Image" className="w-full h-full object-cover" />
            </div>
        </section>
    )
}
