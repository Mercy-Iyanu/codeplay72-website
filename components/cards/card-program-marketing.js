import React from "react";
import Image from 'next/image';

export default function CardProgramMarketing() {
    return <>
        <section className='m-9 p-9 md:w-80 md:m-4 rounded-lg border border-solid border-gray-300 bg-white shadow-md'>
            <div className="card-header flex justify-between">
                <div className="bg-gray-800 rounded-lg ">
                    <Image
                        src={'/Icon (2).svg'}
                        alt='web development icon'
                        width={24}
                        height={26}
                    ></Image>
                </div>
                <h2 className='space-x-2 text-2xl font-semibold'>
                    Marketing
                </h2>
            </div>
            <div className="card-body mt-9">
                <p className="text-base">Marketing courses that cover the most recent marketing trends.</p>
            </div>
        </section>
    </>
}