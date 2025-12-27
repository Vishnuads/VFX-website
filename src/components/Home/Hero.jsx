import React from 'react'
import { Link } from 'react-router-dom'
import HeroBg from '../../assets/images/Hero1.jpg'

const Hero = () => {
    return (
        <section className='mt-15'>
            <div className='w-full relative h-[490px] overflow-hidden'>
                <img
                    src={HeroBg}
                    alt="Hero bg"
                    className='absolute inset-0 object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/50 to-transparent z-5'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 w-full px-4 sm:px-6 md:px-8'>
                    <div className='max-w-5xl mx-auto'>
                        <h1 className='text-2xl  md:text-4xl uppercase lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-2'>
                            Your Gateway to a Career in Film
                        </h1>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6'>
                            VFX & Animation Experience studio-style training guided by top professionals.
                        </p>
                        <Link to="/">
                            <button className='bg-[#bced00] rounded-3xl px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-black font-medium text-sm sm:text-base hover:bg-[#a5d400] transition-colors'>
                                Connect with Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero