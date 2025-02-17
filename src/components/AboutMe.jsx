import React from 'react'
import { RiHeart2Fill } from 'react-icons/ri'

const AboutMe = () => {
    return (
        <div className='w-full pt-10 pb-5 font-["FoundersGrotesk"] border-t-1 border-zinc-400 group'>
            <div className='flex items-center justify-center'>
                <h1 className='text-4xl tracking-wider'>© All Rights Reserved | Made with </h1>
                <RiHeart2Fill className='text-3xl text-red-700 mx-1 group-hover:scale-125 ease-in duration-300' />
                <h1 className='text-4xl tracking-wider'>by</h1>
                <a className='text-4xl tracking-wider group-hover:underline ease-in duration-300' href="https://www.linkedin.com/in/abhisekumarjha/" target="_blank">Abhi
                    Jha.</a>

            </div>
        </div>
    )
}

export default AboutMe