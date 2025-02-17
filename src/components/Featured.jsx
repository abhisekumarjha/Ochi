import React from 'react'
import { GoDotFill } from 'react-icons/go'
import Salience from '../../public/Salience.png'
import CS from '../../public/CS.png'
import { motion } from 'framer-motion'

const Featured = () => {
    return (
        <div className='w-full py-20'>
            <div className="w-full px-20 border-b-1 border-zinc-400 pb-12">
                <h1 className='text-4xl font-["NeueMontreal"]'>Featured projects</h1>
            </div>
            <div className='w-full px-20 mt-10'>
                <div className='w-full flex gap-10 pb-2 text-black'>
                    <p className='w-1/2 flex items-center gap-2 uppercase tracking-tight'>
                        <GoDotFill className='text-xl' /> Salience Labs
                    </p>
                    <p className='w-1/2 flex items-center gap-2 uppercase tracking-tight'>
                        <GoDotFill className='text-xl' /> Cardboard Spaceship
                    </p>
                </div>
                <div className='cards w-full flex gap-10'>
                    <div className='cardcontainer group relative w-1/2 h-[75vh]'>
                        <h1 className='absolute w-full left-full top-1/2 -translate-[50%] z-10 text-9xl text-center text-[#cdea68] font-["FoundersGrotesk"] uppercase overflow-hidden'>
                            {"Salience Labs".split("").map((item, index) => <motion.span className='inline-block translate-y-[100%] group-hover:translate-0 ease-in duration-500' key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-center object-cover cursor-pointer' src={Salience} alt="" />
                        </div>
                    </div>
                    <div className='cardcontainer group relative w-1/2 h-[75vh]'>
                        <h1 className='absolute left-0 top-1/2 -translate-[50%] z-10 text-9xl text-center text-[#cdea68] font-["FoundersGrotesk"] leading-[7vw] uppercase overflow-hidden'>
                            {"Cardboard Spaceship".split("").map((item, index) => <motion.span className='inline-block translate-y-80 group-hover:translate-y-0 ease-in duration-1000' key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-center object-cover cursor-pointer' src={CS} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured