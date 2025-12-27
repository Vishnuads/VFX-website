import React from 'react'
import Marquee from "react-fast-marquee";
import L0 from '../../assets/images/hiring/Logo.png'
import L1 from '../../assets/images/hiring/Logo1.png'
import L2 from '../../assets/images/hiring/Logo2.png'
import L3 from '../../assets/images/hiring/Logo3.png'
import L4 from '../../assets/images/hiring/Logo4.png'
import L5 from '../../assets/images/hiring/Logo5.png'
import L6 from '../../assets/images/hiring/Vector.png'

const Accredit = () => {

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
            <section className='py-20 xl:px-20 lg:px-15 md:px-10 px-5  overflow-hidden '>
                <div>
                    <div className='text-center px-5 '>
                        <p className='text-title uppercase my-3'>accredited by</p>
                        <h1 className='text-white text-2xl my-5  md:text-3xl lg:text-4xl xl:text-5xl'> Accreditation & Industry Recognition</h1>
                        <p className='text-para my-3 md:w-[70%] mx-auto '>Certified. Trusted. Industry-Approved. At Cinema Factory Academy, our VFX programs are reviewed, validated, and shaped by leading professionals, global studios, and academic partners. Every module is built to meet current industry standards, ensuring students train with workflows, tools, and practices used in today’s top VFX pipelines.</p>
                    </div>
                    <div className="logos relative col-span-4 my-10 ">
                        <Marquee>
                            {logos.map((logo) => (
                                <div key={logo.id} className='z-1 mt-3'>
                                    <img src={logo.link} alt={logo.name} className='px-7' />
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

export default Accredit
