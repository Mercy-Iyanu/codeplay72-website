import React from "react";
import Image from 'next/image';
import Link from "next/link";
import Input from "../input";
import Button from "../button";

export default function SignUp() {
    return <>
        <section className="flex">
            <div className="signup flex-1">
                <div className="container mx-auto flex justify-between items-center p-8">
                    <Link href="/" passHref>
                        <span className="text-xl font-bold cursor-pointer logo-text">CodePlay72</span>
                    </Link>
                </div>
                <div>
                    <div className="bg-green-50 p-20">
                        <div className="text-center">
                            <h2 className="font-bold text-3xl pb-2">Sign up for an account</h2>
                            <p className="mb-8">Send, spend and save smarter.</p>
                        </div>
                        <div className="flex justify-between">
                            <button className="flex items-center p-4 border border-custom-green text-custom-green rounded-md">
                                <div className="mr-2">
                                    <Image src="/Google.svg" alt="Google Icon" width={24} height={24} />
                                </div>
                                Sign up with Google
                            </button>
                            <button className="flex items-center p-4 border border-custom-green text-custom-green rounded-md">
                                <div className="mr-2">
                                    <Image src="/Email.svg" alt="Mail Icon" width={24} height={24} />
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
                        <Input type={'password'} placeholder={'Password'} validate={'incorrect email'} />
                        <Input type={'password'} placeholder={'Password'} validate={'incorrect email'} />
                        <p className="mb-8">By creating an account, you agreeing to our <span>Privacy Policy,</span> and <span>Electronics Communication Policy.</span></p>
                        <Button value={'Sign Up'} />

                    </div>
                </div>
            </div>
            <div className="signup-image flex-1">
                <Image src="/signinup-image.png" width={100} height={500} layout="responsive" />
            </div>
        </section>

    </>
}