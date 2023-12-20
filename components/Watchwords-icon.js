import React from "react";
import Image from "next/image";

export default function WatchwordIcon() {
    return (
        <section className="mt-8 flex justify-between items-center">
            <div className="flex">
                <Image
                    src={'/idea.svg'}
                    alt='idea icon'
                    width={24}
                    height={26}
                ></Image>
                <h2 className='pl-2'>
                    Public Speaking
                </h2>
            </div>

            <div className="flex">
                <Image
                    src={'/Briefcase.svg'}
                    alt='idea icon'
                    width={24}
                    height={26}
                ></Image>
                <h2 className='pl-2'>
                    Career-Oriented
                </h2>
            </div>

            <div className="flex">
                <Image
                    src={'/Speak.svg'}
                    alt='idea icon'
                    width={24}
                    height={26}
                ></Image>
                <h2 className='pl-2'>
                    Creative Thinking
                </h2>
            </div>
        </section>
    )
}