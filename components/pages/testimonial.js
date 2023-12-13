import React from "react";
import Image from 'next/image';

export default function Testimoial() {
    return <>
        <section className='md:flex'> 
          <div className="px-12 md:order-last md:w-1/2 ">
            <div className="bg-green-600">
                <h1>Background Picture is coming here soon!</h1>
            </div>
          </div>
          <div className="py-8 px-12 md:w-1/2">
            <div className="text-xl font-bold pr-4">
                <h2 className="capitalize">"Courses are well structured and organised"</h2>
            </div>
            <div className="border-l-2 border-solid border-purple-500 my-8">
                <p className="pl-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, officiis.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, officiis.
                </p>
            </div>
            <div>
                <p><span className="font-bold capitalize">aramide boluwatife -</span> Graduate codePlay72</p>
            </div>
          </div>
          
        </section>
    </>
  } 