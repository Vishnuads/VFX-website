import React from 'react'
import Marquee from "react-fast-marquee";
import L0 from '../../assets/images/hiring/Logo.png'
import L1 from '../../assets/images/hiring/Logo1.png'
import L2 from '../../assets/images/hiring/Logo2.png'
import L3 from '../../assets/images/hiring/Logo3.png'
import L4 from '../../assets/images/hiring/Logo4.png'
import L5 from '../../assets/images/hiring/Logo5.png'
import L6 from '../../assets/images/hiring/Vector.png'


const Hiring = () => {

    const logos = [
        { id: 1, name: "logo1", link: L0 },
        { id: 2, name: "logo2", link: L1 },
        { id: 3, name: "logo3", link: L2 },
        { id: 4, name: "logo4", link: L3 },
        { id: 5, name: "logo5", link: L4 },
        { id: 6, name: "logo6", link: L5 },
        { id: 7, name: "logo7", link: L6 },

    ]

    return (
        <>
            <section className='text-white py-5 '>
                <div className="xl:px-20 lg:px-15 md:px-10 px-5   grid md:grid-cols-5 grid-cols-1 space-y-4 mt-3 text-center">
                    <div className="w-full">
                        <h1 className='xl:text-3xl lg:text-2xl text-xl  text-left hidden md:block'>global vfx studios <br />
                            hiring our graduates</h1>
                          <h1 className='xl:text-3xl lg:text-2xl text-xl text-left md:hidden block'>global vfx studios 
                            hiring our graduates</h1>   
                    </div>
                    <div className="logos relative col-span-4 overflow-hidden">
                        <Marquee>
                            {logos.map((logo) => (
                                <div key={logo.id}  className='z-1 mt-3'>
                                    <img src={logo.link} alt={logo.name} className='px-8' />
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
