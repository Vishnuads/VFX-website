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
import Ac from '../../assets/images/acc.png'


const Accredit = () => {

    const logos = [L0, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14]

    return (
        <>
            <section className='md:pb-20 pb-10 xl:px-20 lg:px-15 md:px-10 px-5  overflow-hidden '>
                <div>
                    <div className='text-center px-5 '>
                        <p className='text-title uppercase mb-2 font-semibold'>accredited by</p>
                        <h1 className='text-white text-3xl mb-2  lg:text-4xl xl:text-5xl'> Accreditation & Industry Recognition</h1>
                        <p className='text-para my-3 md:w-[70%] w-full mx-auto '>Certified. Trusted. Industry-Approved. At Cinema Factory Academy, our VFX programs are reviewed, validated, and shaped by leading professionals, global studios, and academic partners. Every module is built to meet current industry standards, ensuring students train with workflows, tools, and practices used in today’s top VFX pipelines.</p>
                    </div>
                    <div className="logos relative  my-10 space-y-4 ">
                        {/* <Marquee> */}
                        <div className="flex items-center justify-center gap-4">
                            <img src={Ac} alt="Accredit" className='w-auto md:h-70 h-24' /></div>

                        {/* <div className="flex items-center justify-center gap-4">
                            {logos.slice(0,5).map((logo, idx) => (
                                <div key={idx} className='z-1 mt-3 '>
                                    <img src={logo} alt="Logos" className='w-auto h-14' />
                                </div>
                            ))}
                        </div>

                         <div className="flex items-center justify-center gap-4">
                            {logos.slice(5,10).map((logo, idx) => (
                                <div key={idx} className='z-1 mt-3 '>
                                    <img src={logo} alt="Logos" className='w-auto h-14' />
                                </div>
                            ))}
                        </div>
                         <div className="flex items-center justify-center gap-4">
                            {logos.slice(10,15).map((logo, idx) => (
                                <div key={idx} className='z-1 mt-3 '>
                                    <img src={logo} alt="Logos" className='w-auto h-14' />
                                </div>
                            ))}
                        </div> */}
                        {/* </Marquee> */}
                        {/* <div className="absolute inset-0 bg-linear-to-r from-[#141414] via-transparent to-[#141414] z-10 "></div> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Accredit
