import React from "react";
import Image from 'next/image';

export default function CardPlaygroundSchool() {
    return <>
        <section className='text-slate-700 p-9 md:w-80'>
            <div className="card-header w-9 h-9">
                <div className="bg-purple-200 rounded-md p-2">
                    <Image
                        src={'/elements (1).svg'}
                        alt='a user expirence icon'
                        width={24}
                        height={26}
                    ></Image>
                </div>
            </div>
            <div>
                <h2 className='space-x-4 my-4 text-2xl font-semibold'>
                    Digital School Playground
                </h2>
            </div>
            <div className="card-body mt-6">
                <p className="text-base">All learning path can be accessed through one-one coaching session for the duration of the course.</p>
            </div>
        </section>
    </>
}