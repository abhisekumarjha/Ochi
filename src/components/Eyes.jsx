import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setRotate(angle - 180);
        })
    }, [])

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-0.9" className='relative w-full h-full bg-cover bg-center bg-[url("./public/eyes.jpeg")] cursor-pointer'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-[50%]'>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 cursor-pointer'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div className='absolute top-1/2 left-1/2 -translate-[50%] text-[#f1f1f1ec] font-medium'>PLAY</div>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-10'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div className='absolute top-1/2 left-1/2 -translate-[50%] text-[#f1f1f1ec] font-medium'>PLAY</div>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-10'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes