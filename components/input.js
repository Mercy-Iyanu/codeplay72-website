import React from "react";
import Image from 'next/image';

export default function Input({type, placeholder, value, validate}) {
    return <>
        <section>
            <label className="block">
                <input type={type} autoFocus placeholder={placeholder} className="mt-4 block w-full px-3 py-2 bg-white border border-slate-500 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-green-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                peer
                ">{value}</input>
                <p class="mt-2 pl-2 invisible peer-invalid:visible text-pink-600 text-xm">
                    {validate}.
                </p>
            </label>
        </section>

    </>
  }