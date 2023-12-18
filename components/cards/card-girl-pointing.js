import React from "react";
import Image from "next/image";

export default function YoungGirlPointing() {
    return (
        <div className="relative">
            {/* Image */}
            <div className="relative z-10 mx-8">
                <img
                    src="/girl-pointing.png"
                    alt="Your Alt Text"
                    className="rounded-xl"
                />
            </div>

            {/* Background shape */}
            <div className="absolute bottom-0 right-1/4 transform -translate-x-1/2 bg-orange-500 w-1/2 h-3/4 rounded-xl"></div>
        </div>
    )
}