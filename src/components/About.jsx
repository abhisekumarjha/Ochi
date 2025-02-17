import React from 'react'
import { GoDotFill } from 'react-icons/go'
import HomePageImage from '../../public/Homepage-Photo-663x469.jpg'

const About = () => {
    return (
        <div>
            <div className='w-full py-20 px-20 bg-[#cdea68] rounded-tl-4xl rounded-tr-4xl font-["NeueMontreal"]'>
                <h1 className='text-5xl leading-[4.25vw] text-[#212121]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds</span>, <span className='underline'>sell products</span>, <span className='underline'>explain complex ideas</span>, and <span className='underline'>hire great people</span>.</h1>
                <div className='border-t-[0.5px] border-b-[0.5px] border-zinc-400 pt-3 pb-16 mt-16 flex'>
                    <div className='basis-[69%]'><p>What you can expect:</p></div>
                    <div className='flex items-end gap-10'>
                        <div>
                            <p className='max-w-[50vw]'>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                            </p>
                            <p className='mt-20'>
                                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                            </p>
                        </div>
                        <div>
                            <p className='flex flex-col px-2'>
                                <a href="#">S:</a>
                                <a href="#">Noting</a>
                                <a href="#">Instagram</a>
                                <a href="#">Behance</a>
                                <a href="#">Facebook</a>
                                <a href="#">Linkedin</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pt-5'>
                    <div>
                        <h1 className='text-[4vw] text-[#212121]'>Our approach:</h1>
                        <button className='px-5 py-3 rounded-full bg-[#212121] text-[#f1f1f1e9] flex items-center gap-5 uppercase tracking-tighter'>Read More <GoDotFill /></button>
                    </div>
                    <div>
                        <img className='rounded-3xl' src={HomePageImage} alt="Homepage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About