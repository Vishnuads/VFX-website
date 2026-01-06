import React from 'react'
import Marquee from "react-fast-marquee";
import L0 from '../../assets/images/hiring/1.png'
import L1 from '../../assets/images/hiring/15.png'
import L2 from '../../assets/images/hiring/2.png'
import L3 from '../../assets/images/hiring/3.png'
import L4 from '../../assets/images/hiring/4.png'
import L5 from '../../assets/images/hiring/5.png'
import L6 from '../../assets/images/hiring/6.png'
import L7 from '../../assets/images/hiring/7.png'
import L8 from '../../assets/images/hiring/8.png'
import L9 from '../../assets/images/hiring/9.png'
import L10 from '../../assets/images/hiring/10.png'
import L11 from '../../assets/images/hiring/11.png'
import L12 from '../../assets/images/hiring/12.png'
import L13 from '../../assets/images/hiring/13.png'
import L14 from '../../assets/images/hiring/14.png'

const Hiring = () => {

    const logos = [L0, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14]

    return (
        <>
            <section className='text-white py-5 '>
                <div className="md:max-w-6xl mx-auto px-5   grid md:grid-cols-5 grid-cols-1 space-y-4 mt-3 text-center">
                    <div className="w-full">
                        <h1 className='xl:text-3xl lg:text-2xl text-xl  text-left hidden md:block'>global vfx studios <br />
                            that value our talent</h1>
                        <h1 className='xl:text-3xl lg:text-2xl text-xl text-center md:hidden block'>global vfx studios
                            that value our talent</h1>
                    </div>
                    <div className="logos relative col-span-4 overflow-hidden">
                        <Marquee>
                            {logos.map((logo, idx) => (
                                <div key={idx} className='z-1 mt-3'>
                                    <img src={logo} alt="Logos" className='w-auto h-10 px-5 ' />
                                </div>
                            ))}
                        </Marquee>
                        <div className="absolute inset-0 bg-linear-to-r from-[#141414] via-transparent to-[#141414] z-10 "></div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Hiring
