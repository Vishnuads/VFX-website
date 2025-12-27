import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/CFA-logo.png"
import { CaretDownIcon } from '@phosphor-icons/react'
import Hamburger from '../ui/Hamburger'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            {/* Desktop View */}
            <div className="w-full bg-[#141414] p-5 z-50 fixed top-0 backdrop-blur-sm">
                <div className="flex items-center justify-between    ">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="cfa logo" className='md:h-9 h-6 w-auto' />
                    </Link>

                    <div className="menu text-white hidden md:block">
                        <div className="flex items-center justify-between gap-5">
                            <Link to="/">
                                <p>Home </p>
                            </Link>
                            <Link to="/">
                                <p className="flex items-center gap-1">Programs <CaretDownIcon size={20} /></p>
                            </Link>
                            <Link to="/">
                                <p>About Us</p>
                            </Link>
                        </div>
                    </div>


                    <div className="cta">
                        <Link to="/">
                            <button className='bg-[#bced00] rounded-3xl px-4 md:px-5 py-1 md:py-2 text-sm sm:text-base font-medium'>Apply Now</button>
                        </Link>
                    </div>

                    <div className='flex md:hidden items-center'>
                        <Hamburger toggle={toggleMenu} isOn={isOpen} />
                    </div>
                </div>

                <div className={` md:hidden overflow-hidden text-white flex items-center justify-center transition-all duration-300 ease-in-out  ${isOpen ? "h-35 p-5" : "h-0"}`}>
                    <div className="space-y-4">
                        <div>
                            <Link to="/" onClick={closeMenu}>
                                <p>Home </p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" onClick={closeMenu}>
                                <p className="flex items-center gap-1">Program <CaretDownIcon size={20} /></p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" onClick={closeMenu}>
                                <p>About Us</p>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
