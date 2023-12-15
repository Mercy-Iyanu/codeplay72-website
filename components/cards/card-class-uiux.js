import React from "react";
import Image from 'next/image';

export default function CardClassBuildui() {
    return <>
        <section className=' rounded-lg p-6 m-6 bg-slate-100 md:w-80 md:m-4'>
            <div className="h-64 w-100 relative rounded bg-center bg-cover" style={{ backgroundImage: `url("/build_ui.jpg")` }}>
                <p className="rounded bg-white absolute top-2 right-2 px-4">12 weeks</p>
            </div>
            <div className="mt-8">
                <h4 className="font-semibold text-sm text-purple-500"> Design</h4>
                <div className="flex justify-between">
                    <h2 className="font-semibold text-4xl my-6">Building User Interface</h2>
                    <Image
                        src={'/arrow-up-right.svg'}
                        alt='arrow icon'
                        width={24}
                        height={26}
                    ></Image>
                </div>
                <p className="mb-1">Learn how to apply User Experience (UX) principles to your website designs.</p>
            </div>
            <div className="flex">
                <p className="text-purple-500">4.2</p>
                <Image
                    className="pr-2"
                    src={'/Star 1.svg'}
                    alt='star icon'
                    width={24}
                    height={26}
                ></Image>
                <Image
                    className="pr-2"
                    src={'/Star 1.svg'}
                    alt='star icon'
                    width={24}
                    height={26}
                ></Image>
                <Image
                    className="pr-2"
                    src={'/Star 1.svg'}
                    alt='star icon'
                    width={24}
                    height={26}
                ></Image>
                <Image
                    className="pr-2"
                    src={'/Star 1.svg'}
                    alt='star icon'
                    width={24}
                    height={26}
                ></Image>
                <Image
                    className="pr-2"
                    src={'/Star 1.svg'}
                    alt='star icon'
                    width={24}
                    height={26}
                ></Image>
                <p>(125)</p>
            </div>
            <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                    <div >
                        <Image
                            className="w-9 h-9 rounded-full"
                            src={'/Avatar (1).png'}
                            alt='star icon'
                            width={24}
                            height={26}
                        ></Image>
                    </div>
                    <div className="ml-4 text-sm">
                        <p className="font-bold">Esther Howard</p>
                        <p>2001 Enrolled</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-green-600 font-bold 1ext-3xl">$11.70</h3>
                </div>
            </div>
        </section>
    </>
}    