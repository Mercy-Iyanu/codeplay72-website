import React from 'react';
import Image from 'next/image';
import NavBar from '../NavBar';
import HeroSection from '../HeroSection';
import Footer from '../footer';
import CardOurWhy from '../cards/card-our-why';
import CardPlayground from '../cards/card-playground';
import CardClass from '../cards/card-class';
import CardCourse from '../cards/card-course';
import CardProgramUser from '../cards/card-program-user';
import CardProgramWeb from '../cards/card-program-web';
import Testimoial from './testimonial';

export default function HomePage() {
    return <>
        <NavBar />
        <HeroSection />

        {/* Programs */}
        <section className="my-9">
            <h2 className="text-center font-bold text-3xl pb-9 ">fostering a playful & engaging learing environment</h2>
            <div className="md:flex md:flex-wrap md:justify-center">
                <CardProgramUser />
                <CardProgramWeb />
            </div>
        </section>

        {/* Program Courses */}
        <section className="my-9">
            <div className="flex flex-wrap justify-center">
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
            </div>
        </section>

        {/* Pragram Classes */}
        <section className="my-9 ">
            <div className="m-6 md:ml-16">
                <h2 className=" font-bold text-3xl ">Most Popular Classes</h2>
                <p>Join our famous classes, and have your future defined with endless posibilities.</p>
            </div>
            <div className="md:flex md:flex-wrap md:justify-center">
                <CardClass />
                <CardClass />
                <CardClass />
            </div>
        </section>

        {/* Program Play ground */}
        <section className="py-9">
            <h2 className="text-center font-bold text-3xl ">Program Playground</h2>
            <div>

            </div>
            <div className="md:flex md:flex-wrap md:justify-center">
                <CardPlayground />
                <CardPlayground />
                <CardPlayground />
                <CardPlayground />
            </div>
        </section>

        {/* Why Take Our Course */}
        <section className="bg-orange-50 py-9">
            <h2 className="text-center font-bold text-3xl ">Why take our courses</h2>
            <div className="md:flex md:flex-wrap md:justify-center">
                <CardOurWhy />
                <CardOurWhy />
                <CardOurWhy />
            </div>
        </section>
        <Testimoial></Testimoial>
        <Footer></Footer>
    </>
}