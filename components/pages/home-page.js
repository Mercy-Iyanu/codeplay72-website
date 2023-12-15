import React from 'react';
import Image from 'next/image';
import NavBar from '../NavBar';
import HeroSection from '../HeroSection';
import Kiddies from '../Kiddies';
import Footer from '../footer';
import CardOurWhyChild from '../cards/card-our-why-child';
import CardOurWhyCoach from '../cards/card-our-why-course-coach';
import CardOurWhyExpert from '../cards/card-our-why-course-expert';
import CardPlaygroundHome from '../cards/card-playground-home';
import CardPlaygroundPrivate from '../cards/card-playground-private';
import CardPlaygroundCube from '../cards/card-playground-cube';
import CardPlaygroundSchool from '../cards/card-playground-school';
import CardClassFigma from '../cards/card-class-figma';
import CardClassShoaib from '../cards/card-class-shoaib';
import CardClassBuildui from '../cards/card-class-uiux';
import CardCourseDigital from '../cards/card-course-digital';
import CardCourseData from '../cards/card-course-data';
import CardCourseArtificial from '../cards/card-course-artificial';
import CardCourseRobotics from '../cards/card-course-robotics';
import CardProgramUser from '../cards/card-program-user';
import CardProgramWeb from '../cards/card-program-web';
import CardProgramMarketing from '../cards/card-program-marketing';
import Testimoial from './testimonial';

export default function HomePage() {
    return (
        <>
            <div className='container-body'>
                <header>
                    <NavBar />
                    <HeroSection />
                </header>
                <Kiddies />

                {/* Programs */}
                <section className="my-9">
                    <h2 className="text-center font-bold text-3xl pb-9 ">Fostering a playful & engaging learning environment</h2>
                    <div className="md:flex md:flex-wrap md:justify-center">
                        <CardProgramUser />
                        <CardProgramWeb />
                        <CardProgramMarketing />
                    </div>
                </section>

                {/* Program Courses */}
                <section className="my-9">
                    <div className="flex flex-wrap justify-center">
                        <CardCourseDigital />
                        <CardCourseData />
                        <CardCourseArtificial />
                        <CardCourseRobotics />
                    </div>
                </section>

                {/* Pragram Classes */}
                <section className="my-9 ">
                    <div className="m-6 md:ml-16">
                        <h2 className=" font-bold text-3xl ">Most Popular Classes</h2>
                        <p>Join our famous classes, and have your future defined with endless posibilities.</p>
                    </div>
                    <div className="md:flex md:flex-wrap md:justify-center">
                        <CardClassFigma />
                        <CardClassShoaib />
                        <CardClassBuildui />
                    </div>
                </section>

                {/* Program Play ground */}
                <section className="py-9">
                    <h2 className="text-center font-bold text-3xl ">Programme Playground</h2>
                    <div>

                    </div>
                    <div className="xl:grid xl:grid-cols-2 xs:flex sm:flex-wrap sm:justify-center">
                        <CardPlaygroundHome />
                        <CardPlaygroundPrivate />
                        <CardPlaygroundCube />
                        <CardPlaygroundSchool />
                    </div>
                </section>

                {/* Why Take Our Course */}
                <section className="bg-orange-50 py-9">
                    <h2 className="text-center font-bold text-3xl ">Why take our courses</h2>
                    <div className="md:flex md:flex-wrap md:justify-center">
                        <CardOurWhyChild />
                        <CardOurWhyCoach />
                        <CardOurWhyExpert />
                    </div>
                </section>
                <Testimoial></Testimoial>
                <Footer></Footer>
            </div>
        </>
    )
}