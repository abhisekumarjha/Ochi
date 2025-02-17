import React from 'react'
import ochi from '../../public/ochi.svg'
import clutch from '../../public/clutch.svg'
import theFuture from '../../public/theFuture.png'

const Cards = () => {
    return (
        <div
            data-scroll data-scroll-section data-scroll-speed="-0.22" className='w-full h-screen px-20 flex items-center gap-3 font-["NeueMontreal"]'>
            <div className='cardcontainer w-1/2 h-[50vh]'>
                <div className='card relative rounded-lg w-full h-full bg-[#004d43] flex items-center justify-center'>
                    <img src={ochi} alt="" />
                    <button className='absolute left-5 bottom-5 px-3 py-1 border-[0.5px] rounded-full text-[#cdea68] cursor-pointer'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-3 w-1/2 h-[50vh]'>
                <div className='card relative flex items-center justify-center rounded-lg w-1/2 h-full bg-[#132724]'>
                    <img src={clutch} alt="" />
                    <button className='absolute left-5 bottom-5 px-3 py-1 border-[0.5px] rounded-full text-zinc-300 uppercase cursor-pointer'>Rating 5.0 on clutch</button>
                </div>
                <div className='card relative flex items-center justify-center rounded-lg w-1/2 h-full bg-[#132724]'>
                    <img className='w-1/4' src={theFuture} alt="" />
                    <button className='absolute left-5 bottom-5 px-3 py-1 border-[0.5px] rounded-full text-zinc-300 uppercase cursor-pointer'>Business Bootcamp Alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards