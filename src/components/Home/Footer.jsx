import React from 'react'
import logo from '../../assets/images/CFA-logo.png'
import { InstagramLogo, LinkedinLogo, YoutubeLogo, FacebookLogo, EnvelopeIcon, MapPinAreaIcon, InstagramLogoIcon } from '@phosphor-icons/react'
import M1 from '../../assets/images/mentors/m1.jpg'
import M2 from '../../assets/images/mentors/m2.jpg'
import M3 from '../../assets/images/mentors/m3.jpg'
import M4 from '../../assets/images/mentors/m4.jpg'
import M5 from '../../assets/images/mentors/m5.jpg'
import M6 from '../../assets/images/mentors/m6.jpg'
import M7 from '../../assets/images/mentors/m7.jpg'
import M8 from '../../assets/images/mentors/m8.jpg'
import M9 from '../../assets/images/mentors/m9.jpg'
import M10 from '../../assets/images/mentors/m10.jpg'

import M11 from '../../assets/images/mentors/m11.jpg'
import M12 from '../../assets/images/mentors/m12.jpg'
import M13 from '../../assets/images/mentors/m13.webp'
import M14 from '../../assets/images/mentors/m14.jpg'
import M15 from '../../assets/images/mentors/m15.jpg'
import M16 from '../../assets/images/mentors/m16.avif'
import M17 from '../../assets/images/mentors/m17.avif'
import M18 from '../../assets/images/mentors/m19.jpg'
import M19 from '../../assets/images/mentors/m18.jpg'
import M20 from '../../assets/images/mentors/m20.avif'

import M21 from '../../assets/images/mentors/m21.jpg'
import M22 from '../../assets/images/mentors/m22.avif'
import M23 from '../../assets/images/mentors/m23.jpg'
import M24 from '../../assets/images/mentors/m24.jpg'
import M25 from '../../assets/images/mentors/m25.jpg'
import M26 from '../../assets/images/mentors/m26.avif'
import M27 from '../../assets/images/mentors/m28.jpg'
import M28 from '../../assets/images/mentors/m29.jpg'
import M29 from '../../assets/images/mentors/m27.jpg'
import M30 from '../../assets/images/mentors/m30.avif'

import M31 from '../../assets/images/mentors/m32.jpg'
import M32 from '../../assets/images/mentors/m33.jpg'
import M33 from '../../assets/images/mentors/m34.jpg'
import M34 from '../../assets/images/mentors/m35.jpg'
import M35 from '../../assets/images/mentors/m36.jpg'
import M36 from '../../assets/images/mentors/m37.jpg'
import M37 from '../../assets/images/mentors/m38.avif'
import M38 from '../../assets/images/mentors/m39.jpg'
import M39 from '../../assets/images/mentors/m40.jpg'
import M40 from '../../assets/images/mentors/m42.avif'

import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import { Mail, PhoneIcon } from 'lucide-react'

const Footer = () => {

    const images = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M15, M16, M17, M18, M19, M20, M21, M22, M23, M24, M25, M26, M27, M28, M29, M30, M31, M32, M33, M34, M35, M36, M37, M38, M39, M40]

    return (
        <>
            <section className='bg-[#141414] '>
                <div className="films">
                    <Marquee >
                        <div className='flex items-center overflow-hidden'>
                            {images.map((img, index) => (
                                <div key={index} className='w-40 h-60'>
                                    <img src={img} alt="Flims " className='w-100 h-60 object-cover' />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
                <div className="tag bg-title   ">
                    <div className='md:max-w-6xl mx-auto px-5'>
                        <h1 className='text-black text-2xl md:text-4xl py-5'>credits from cinema factory mentors</h1>
                    </div>
                </div>
                <footer className='py-7 md:max-w-6xl mx-auto px-5 md:px-0'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                        <div className='mb-3'>
                            <img src={logo} alt="CFA Logo" className='w-80' />
                        </div>
                        <div className='col-span-' >
                            <div className="md:flex  space-y-3 md:gap-10">

                                <div>
                                    <p className='text-white text-lg font-bold mb-3'> Programs</p>
                                    <ul className='text-para space-y-2 footer-li'>
                                        <li><Link to='/course'><p>1-Year Diploma in VFX</p></Link></li>
                                        {/* <li><p>Virtual Production Training</p></li>
                                        <li><p>Matchmove & Tracking</p></li>
                                        <li><p>Compositing & Finishing</p></li>
                                        <li><p>Short-Term VFX Workshops</p></li> */}
                                    </ul>
                                </div>
                                <div >
                                    <p className='text-white text-lg font-bold mb-3'> Quick Links</p>
                                    <ul className='text-para space-y-2 footer-li'>
                                        <li>
                                            <Link to="/" ><p>Home</p></Link>
                                        </li>
                                        <li> <Link to="/global" ><p>Global Exposure</p></Link></li>
                                        <li>  <Link to="/apply" ><p>Contact Us</p> </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p className='text-white text-lg font-bold'>Get in Touch with Us</p>
                            {/* <p className='text-para text-sm my-2'>Sign up to receive program updates, industry insights, job alerts, and exclusive offers from Cinema Factory Academy.</p> */}
                            <div className="flex  cursor-pointer  mt-4">
                                <div>
                                    <MapPinAreaIcon className='text-title' size={26} /></div>
                                <p className='text-para text-left px-3 '>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018, India</p>

                            </div>

                            <Link to="mailto:admission@cinemafactory.co.in" target="_blank" >
                                <div className="flex items-center cursor-pointer  mt-3">
                                    <div>
                                        <EnvelopeIcon className='text-title' size={26} /></div>
                                    <p className='text-para text-lg hover:text-title cursor-pointer px-3 '>admission@cinemafactory.co.in</p>

                                </div>
                            </Link>
                            <Link to="tel:+919884683888" target="_blank" >
                                <div className="flex items-center cursor-pointer  mt-3">
                                    <div>
                                        <PhoneIcon className='text-title' size={22} /></div>
                                    <button className='text-para  hover:text-title cursor-pointer px-3 '><p>98846 83888</p></button>

                                </div>
                            </Link>

                             <Link to="https://www.instagram.com/cfa_vfx/" target="_blank" >
                                <div className="flex items-center cursor-pointer  mt-3">
                                    <div>
                                        <InstagramLogoIcon className='text-title' size={26} /></div>
                                    <button className='text-para  hover:text-title cursor-pointer px-3 '><p>cfa_vfx</p></button>

                                </div>
                            </Link>

                            {/* <p className='text-para text-xs my-2'>By subscribing, you agree to receive emails from Cinema Factory Academy. You can unsubscribe at any time. Read our <span className='text-title'>Privacy Policy</span>  to learn how we protect your data.</p> */}
                            {/* <div className="flex items-center gap-3 my-5">
                                <InstagramLogo size={32} color="#ffffff" weight="fill" />
                                <LinkedinLogo size={32} color="#ffffff" weight="fill" />
                                <YoutubeLogo size={32} color="#ffffff" weight="fill" />
                                <FacebookLogo size={32} color="#ffffff" weight="fill" />
                            </div> */}
                        </div>
                    </div>
                </footer>
            </section>


        </>
    )
}

export default Footer
