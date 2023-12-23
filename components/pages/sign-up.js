import React from "react";
import Image from 'next/image';
import Link from "next/link";
import Input from "../input";
import Button from "../button";

export default function SignUp() {
    return <>
        <section>
            <div className="flex">
                <div className="signup flex-1">
                    <div className="container mx-auto flex justify-between items-center mt-8 mr-24">
                        <Link href="/" passHref>
                            <span className="text-xl font-bold cursor-pointer logo-text">CodePlay72</span>
                        </Link>
                    </div>
                    <div>
                        <div className="bg-green-50 p-6 m-20 mt-0 mr-8">
                            <div className="text-center">
                                <h2 className="font-bold text-3xl pb-2">Sign up for an account</h2>
                                <p className="mb-8">Send, spend and save smarter.</p>
                            </div>
                            <div className="flex justify-between">
                                <button className="flex items-center p-3 border border-custom-green text-custom-green rounded-md">
                                    <div className="mr-2">
                                        <Image src="/Google.svg" alt="Google Icon" width={20} height={20} />
                                    </div>
                                    Sign up with Google
                                </button>
                                <button className="flex items-center p-3 border border-custom-green text-custom-green rounded-md">
                                    <div className="mr-2">
                                        <Image src="/Email.svg" alt="Mail Icon" width={20} height={20} />
                                    </div>
                                    Sign up with Email
                                </button>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <Input type={'text'} placeholder={'First name'} />
                                </div>
                                <div className="ml-6">
                                    <Input type={'text'} placeholder={'Last name'} />
                                </div>
                            </div>
                            <Input type={'email'} placeholder={'Email'} validate={'incorrect email'} />
                            <div className="relative">
                                <Input type={'password'} placeholder={'Password'} validate={'incorrect password'} />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Image src="/eye-off.svg" alt="password Icon" width={24} height={24} />
                                </div>
                            </div>
                            <Input type={'password'} placeholder={'Password'} validate={'incorrect password'} />
                            <p className="mb-8">By creating an account, you agreeing to our <span>Privacy Policy,</span> and <span>Electronics Communication Policy.</span></p>
                            <button className="my-2 flex p-2 button-font-size justify-center items-center bg-custom-green text-white rounded-8 border border-primary-base-color bg-primary-base-color shadow-button">
                                Sign  Up
                            </button>

                        </div>
                    </div>
                </div>
                <div className="signup-image flex-1 border border-solid border-gray-300">
                    <Image
                        src="/signinup-image.png"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>

    </>
}