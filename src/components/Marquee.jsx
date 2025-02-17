import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    return (
        <div
            data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 rounded-tl-4xl rounded-tr-4xl bg-[#004d43]'>
            <div className='text border-t-[0.5px] border-b-[0.5px] border-zinc-400 flex whitespace-nowrap'>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[20vw] font-semibold uppercase leading-none font-["FoundersGrotesk"] text-white pr-20'>We are Ochi</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='text-[20vw] font-semibold uppercase leading-none font-["FoundersGrotesk"] text-white pr-20'>We are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee