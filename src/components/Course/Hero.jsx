import React from 'react'
import { Link } from 'react-router-dom'
import CourseBg from '../../assets/images/course1.webp'
import { DownloadSimple } from '@phosphor-icons/react'


const Hero = () => {
    return (
        <section className='mt-15'>
            <div className='w-full relative h-[490px] overflow-hidden'>
                <img
                    src={CourseBg}
                    alt="Course bg"
                    className='absolute inset-0 object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/80 to-transparent z-5'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 w-full px-4 sm:px-6 md:px-8'>
                    <div className='max-w-5xl mx-auto'>
                        <p className='text-title uppercase font-semibold'>One-Year VFX Mastery Program</p>
                        <h1 className='text-3xl  lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 sm:mb-2'>
                            Become Studio-Ready in 12 Months
                        </h1>
                        <p className='text-sm sm:text-base md:text-md lg:text-lg mb-4 sm:mb-6'>
                            Learn the full pipeline — VFX + AI + Virtual Production + Motion Capture — from pre-production to final delivery. Train hands-on with live shoots, labs & internship.
                        </p>
                        <div className='flex md:gap-5 gap-3 justify-center items-center'>
                            <Link to="/apply">
                                <button className='bg-title border border-title rounded-4xl px-5  py-2 text-black font-medium text-sm sm:text-base hover:bg-[#a5d400] transition-colors'>
                                    Apply Now
                                </button>
                            </Link>
                            <a href="">
                                <button className='text-title border border-title group flex items-center gap-3 rounded-4xl px-5 py-2  font-medium text-sm sm:text-base hover:bg-title hover:text-black transition-colors'>
                                    Download Brochure <DownloadSimple size={18} className='group-hover:text-black text-title' weight="fill" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero