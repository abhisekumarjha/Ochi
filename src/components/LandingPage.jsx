import { motion } from 'framer-motion'
import React from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-speed='-0.3' className='w-full h-screen bg-[#f1f1f1] pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["We create", "eye-opening", "presentations"].map((item, index) => {
                    return (
                        <div key={index} className="masker font-['FoundersGrotesk']">
                            <div className="w-fit flex items-end">
                                {index === 1 && (<motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "9vw" }}
                                    transition={{ ease: "backOut", duration: 1 }} className='w-[9vw] h-[5.7vw] rounded-md mr-[0.5vw] overflow-hidden'>
                                    <img src={"public/LandingPage.jpeg"} alt="landingPage" className='w-full h-full' />
                                </motion.div>)}
                                <h1 className='uppercase text-9xl leading-[6.5vw] font-semibold'>{item}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='border-t-[0.5px] border-zinc-400 mt-24 flex items-center justify-between py-3 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return <p key={index} className='text-md font-light leading-none'>{item}</p>
                })}
                <div className='start flex items-center gap-3'>
                    <div className='px-4 py-1 border-1 border-zinc-600 font-light text-sm rounded-full uppercase cursor-pointer'>Start the Project</div>
                    <div className='rounded-full  text-2xl rotate-45 p-1 border-1 border-zinc-600 cursor-pointer'><IoIosArrowRoundUp /></div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage