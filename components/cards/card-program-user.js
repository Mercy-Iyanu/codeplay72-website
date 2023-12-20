import React from "react";
import Image from 'next/image';

export default function CardProgramUser() {
    return <>
        <section className='m-9 bg-green-600 rounded-lg p-9 text-white md:w-80 md:m-4 rounded-2xl bg-primary-base-color shadow-xl'>
            <div className="card-header flex justify-between">
                <div className="bg-green-800 rounded-lg p-2">
                    <Image
                        src={'/Icon.svg'}
                        alt='a user expirence icon'
                        width={24}
                        height={24}
                    ></Image>
                </div>
                <h2 className='space-x-4 text-2xl font-semibold'>
                    User Experience
                </h2>
            </div>
            <div className="card-body mt-9">
                <p className="text-base">Lesson on design that covers the basics of design.</p>
            </div>
        </section>
    </>
}