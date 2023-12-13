import React from "react";
import Image from 'next/image';

export default function CardOurWhy() {
    return <>
        <section className='m-8 py-9 px-6 bg-slate-100 rounded-lg md:w-80 md:m-4'> 
            <div className="flex justify-between items-center">
                <div className="bg-green-200 w-9 h-9 p-2  rounded-full">
                    <Image
                        src={'/images/Icon-user-ex.png'}
                        alt='a user expirence icon'
                        width={24}
                        height={26}
                    ></Image>
                </div>
                <div className="text-xl text-green-500 font-bold pl-5">
                    <h2 className=''>
                        Communicate With Coach
                    </h2>
                </div>
            </div>
            <div className="card-body mt-4">
                <p className="text-base">Lesson on design that covers the basics of design.</p>
            </div>
        </section>  
    </>
  }