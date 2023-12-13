import React from "react";
import Image from 'next/image';
import Input from "../components/input";
import Button from "../components/button";

export default function SignUp() {
    return <>
        <section>
            <div>
                <div className="max-w-md bg-green-50 p-9">
                    <div className="text-center">
                        <h2 className="font-bold text-3xl pb-2">Sign up for an account</h2>
                        <p className="mb-8">Send, spend and save smarter.</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <Input type={'text'} placeholder={'First name'} />
                        </div>
                        <div className="ml-6">
                            <Input type={'text'} placeholder={'Last name'}  />
                        </div>
                    </div>
                    <Input type={'email'} placeholder={'Email'} validate={'incorrect email'} />
                    <Input type={'password'} placeholder={'Password'} validate={'incorrect email'} />
                    <Input type={'password'} placeholder={'Password'} validate={'incorrect email'} />
                    <p className="mb-8">By creating an account, you agreeing to our <span>Privacy Policy,</span> and <span>Electronics Communication Policy.</span></p>
                    <Button value={'Sign Up'}/>
                    
                </div>
                <div></div>
            </div>
        </section>

    </>
  }