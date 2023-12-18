import React from "react"
import Image from "next/image";

export default function OurPartners() {
    return (
        <section className="flex justify-center items-center">
            <ul className="flex space-x-8">
                <li>
                    <img
                        src="/Group.svg"
                        alt="partner-icon"
                        className="rounded-xl w-20 h-20"
                    />
                </li>
                <li>
                    <img
                        src="/Codecov (logo — Black).svg"
                        alt="partner-icon"
                        className="rounded-xl w-20 h-20"
                    />
                </li>
                <li>
                    <img
                        src="/Codecov (logo — Black).svg"
                        alt="partner-icon"
                        className="rounded-xl w-20 h-20"
                    />
                </li>
                <li>
                    <img
                        src="/UserTesting (logo — Black).svg"
                        alt="partner-icon"
                        className="rounded-xl w-20 h-20"
                    />
                </li>
                <li>
                    <img
                        src="/Magic Leap (logo — Black).svg"
                        alt="partner-icon"
                        className="rounded-xl w-20 h-20"
                    />
                </li>
            </ul>
        </section>
    )
}