'use client';
import React from 'react'
import loader from '../../publick/loader.png'
import Image from 'next/image'


export default function Loader() {
    return (
        <>
            <div className=' flex justify-center'>
                <Image className='element' src={loader} alt="Loading" width={35} height={35} />
            </div>
        </>
    )
}
