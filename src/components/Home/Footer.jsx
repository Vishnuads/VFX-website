import React from 'react'
import logo from '../../assets/images/CFA-logo.png'
import { InstagramLogo, LinkedinLogo, YoutubeLogo, FacebookLogo } from '@phosphor-icons/react'
import M1 from '../../assets/images/mentors/m1.jpg'
import M2 from '../../assets/images/mentors/m2.jpg'
import M3 from '../../assets/images/mentors/m3.jpg'
import M4 from '../../assets/images/mentors/m4.jpg'
import M5 from '../../assets/images/mentors/m5.jpg'
import M6 from '../../assets/images/mentors/m6.jpg'
import M7 from '../../assets/images/mentors/m7.jpg'
import M8 from '../../assets/images/mentors/m8.jpg'
import Marquee from 'react-fast-marquee'

const Footer = () => {

    const images = [M1, M2, M3, M4, M5, M6, M7, M8]
    return (
        <>
            <section className='bg-[#141414]'>
                <div className="films">
                    <Marquee>
                    <div className='flex items-center overflow-hidden'>
                        {/* <Marquee> */}
                        {images.map((img, index) => (
                            <div key={index} className='w-40 h-60'>
                                <img src={img} alt="Flims " className='w-100 h-60 object-cover' />
                            </div>
                        ))}
                        {/* </Marquee> */}
                    </div>
                    </Marquee>
                </div>
                <div className="tag bg-title ">
                    <div className='max-w-6xl mx-auto px-5 md:px-0'>
                        <h1 className='text-black text-2xl md:text-4xl py-5'>credits from cinema factory mentors</h1>
                    </div>
                </div>
                <footer className='max-w-6xl mx-auto py-10 px-5 md:px-0'>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                        <div className='mb-3'>
                            <img src={logo} alt="CFA Logo" className='w-80' />
                        </div>
                        <div >
                            <div className="md:flex justify-center space-y-3 gap-5">
                                <div >
                                    <p className='text-white text-lg font-bold mb-3'> Quick Links</p>
                                    <ul className='text-para space-y-2 footer-li'>
                                        <li><p>Home</p></li>
                                        <li><p>About Us</p></li>
                                        <li><p>Connect with Us</p></li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='text-white text-lg font-bold mb-3'> Programs</p>
                                    <ul className='text-para space-y-2 footer-li'>
                                        <li><p>1-Year Diploma in Visual Effects</p></li>
                                        <li><p>Virtual Production Training</p></li>
                                        <li><p>Matchmove & Tracking</p></li>
                                        <li><p>Compositing & Finishing</p></li>
                                        <li><p>Short-Term VFX Workshops</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-white text-lg font-bold'>Stay Updated With Cinema Factory VFX</p>
                            <p className='text-para text-sm my-2'>Sign up to receive program updates, industry insights, job alerts, and exclusive offers from Cinema Factory Academy.</p>

                            <div className="flex items-center  gap-3 my-4">
                                <input type="mail" className='bg-white w-[80%] py-2 px-4' placeholder='Email' />
                                <button className='bg-[#bced00]  px-3 py-2 text-sm sm:text-base font-medium'>Subscribe</button>
                            </div>

                            <p className='text-para text-xs my-2'>By subscribing, you agree to receive emails from Cinema Factory Academy. You can unsubscribe at any time. Read our <span className='text-title'>Privacy Policy</span>  to learn how we protect your data.</p>
                            <div className="flex items-center gap-3 my-5">
                                <InstagramLogo size={32} color="#ffffff" weight="fill" />
                                <LinkedinLogo size={32} color="#ffffff" weight="fill" />
                                <YoutubeLogo size={32} color="#ffffff" weight="fill" />
                                <FacebookLogo size={32} color="#ffffff" weight="fill" />
                            </div>
                        </div>
                    </div>
                </footer>
            </section>


        </>
    )
}

export default Footer
