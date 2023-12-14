import React from "react";
import Image from 'next/image';

export default function CardClassShoaib() {
    return <>
        <section className=' rounded-lg p-6 m-6 bg-slate-100 md:w-80 md:m-4'>
            <div className="h-64 w-100 relative rounded bg-center bg-cover" style={{ backgroundImage: `url("/shoaib_learn.jpg")` }}>
                <p className="rounded bg-white absolute top-2 right-2 px-4">12 weeks</p>
            </div>
            <div className="mt-8">
                <h4 className="font-semibold text-sm text-purple-500"> Design</h4>
                <h2 className="font-semibold text-4xl my-6">Learn With Shoaib</h2>
                <p className="mb-1">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>
            </div>
            <div className="flex">
                <p className="text-purple-500">3.9</p>
                <p className="mx-4">rating starts</p>
                <p>counts</p>
            </div>
            <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                    <div className="w-9 h-9 bg-yellow-500 rounded-full"></div>
                    <div className="ml-4 text-sm">
                        <p className="font-bold">Jenny Wilson</p>
                        <p>2001 Enrolled</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-green-600 font-bold text-3xl">$8.99</h3>
                </div>
            </div>
        </section>
    </>
}