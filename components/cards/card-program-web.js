import React from "react";
import Image from 'next/image';

export default function CardProgramWeb() {
    return <>
        <section className='m-9 p-9 md:w-80 md:m-4 rounded-lg border border-solid border-gray-300 bg-white shadow-md'>
            <div className="card-header flex justify-between">
                <div className="bg-white-800 rounded-lg ">
                    <Image
                        src={'/Icon (1).svg'}
                        alt='web development icon'
                        width={24}
                        height={24}
                    ></Image>
                </div>
                <h2 className='space-x-4 text-2xl font-semibold'>
                    Web Development
                </h2>
            </div>
            <div className="card-body mt-9">
                <p className="text-base">Classes in development that cover the most recent advancements in web.</p>
            </div>
        </section>
    </>
}