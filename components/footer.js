import React from "react";
import Image from 'next/image';

export default function Footer() {
    return <>
        <section className="bg-green-900 text-white py-16 px-9">
            <div className="lg:flex">
                <div>
                    <h3 className="font-bold text-2xl">codePlay72</h3>
                    <p className="my-9">CodePlay72 is a company born out of the hope of developing and building African child in preparing them for the future of digital technology</p>
                </div>
                <div className="lg:ml-9">
                    <h4 className="font-bold text-lg">Quick links</h4>
                    <div className="flex text-green-300">
                        <h5 className="">about</h5>
                        <h5 className="px-4">blog</h5>
                    </div>
                    <div className="flex text-green-300">
                        <h5 className="">courses</h5>
                        <h5 className="px-4">contact</h5>
                    </div>
                </div>
                <div className="lg:ml-9">
                    <h4 className="font-bold text-lg">Contact us</h4>
                    <div className="flex">
                        <img
                            src="/phone-icon.svg"
                            alt="phone-icon"
                        />
                        <h5 className="text-green-300">+234 703 0058 172</h5>
                    </div>
                    <div className="flex">
                        <img
                            src="/Group 13186.svg"
                            alt="email-icon"
                        />
                        <h5 className="text-green-300">hellocodeplay72@gmail.com</h5>
                    </div>
                </div>
                <div className="lg:ml-9">
                    <h4 className="font-bold text-lg">Find us</h4>
                    <div className="flex">
                        <img
                            src="/address-icon.svg"
                            alt="email-icon"
                        />
                        <h5 className="text-green-300">7A Hara-hyel House, Dogon Karfe, Jos Plateau State.</h5>
                    </div>
                </div>
            </div>
            <div className="flex justify-between border-t border-solid border-green-300 my-4 py-4">
                <div>
                    <p>copyright 2023 | All Right</p>
                    <p>Reserved</p>
                </div>
                <div className="flex space-x-4">
                    <img
                        src="/facebook.svg"
                        alt="facebook-icon"
                    />
                    <img
                        src="/twitter.svg"
                        alt="twitter-icon"
                    />
                    <img
                        src="/instagram.svg"
                        alt="instagram-icon"
                    />
                    <img
                        src="/behance.svg"
                        alt="behance-icon"
                    />
                    <img
                        src="/dribbble.svg"
                        alt="dribbble-icon"
                    />
                </div>
            </div>
        </section>
    </>
}