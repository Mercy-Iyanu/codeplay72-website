import React from 'react';
import Image from 'next/image';

export default function Kiddies() {
    return (
        <div className='kiddies-playing w-full md:w-1125 h-96 md:h-459 relative rounded-lg overflow-hidden'>

            <Image
                src='/kiddies.png'
                alt='kids-playing-jumping'
                layout='fill'
                objectFit='cover'
            />
        </div>
    )
}
