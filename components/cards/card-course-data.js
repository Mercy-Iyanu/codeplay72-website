import React from "react";
import Image from 'next/image';

export default function CardCourseData() {
    return <>
        <section className='relative w-403 h-290 rounded-3xl px-4 m-4 bg-center bg-cover' style={{ backgroundImage: `url("/data_sci.png")` }}>
            <div className="absolute w-403 h-290 inset-0 bg-black bg-opacity-30 rounded-3xl"></div>
            <h2 className="text-white text-center font-work-sans text-4xl font-bold leading-140 py-24 relative z-10">Data Design</h2>
        </section>

    </>
}