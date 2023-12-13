import React from "react";
import Image from 'next/image';

export default function CardCourse() {
    return <>
        <section className='rounded-3xl px-4 m-4 text-white bg-center bg-cover' style={{ backgroundImage: `url("/images/test.png")` }}> 
           <h2 className="py-24 text-center font-extrabold text-4xl">Digital Design</h2>  
        </section>
    </>
  }