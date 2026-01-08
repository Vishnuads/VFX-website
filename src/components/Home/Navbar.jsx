import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/CFA-logo.png"
import { CaretDownIcon } from '@phosphor-icons/react'
import Hamburger from '../ui/Hamburger'
import Dropdown from '../ui/DropDown'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(!isOpen)
    };
    const programs =[
        {label: "1yr VFX Mastery", link: "/course"},
        // {label: "Shot Term", link: "/short-term"}
    ]

    return (
        <>
            {/* Desktop View */}
            <div className="w-full bg-[#141414] py-5  px-5 z-50 fixed top-0 backdrop-blur-sm">
                <div className="flex items-center justify-between  md:max-w-6xl mx-auto  ">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="cfa logo" className='md:h-9 h-6 w-auto' />
                    </Link>

                    <div className="menu text-white hidden md:block">
                        <div className="flex items-center justify-between gap-5">
                            <Link to="/">
                                <p>Home </p>
                            </Link>
                          
                            <Dropdown title="Programs" items={programs} />

                            <Link to="/global">
                                <p>Global Exposure</p>
                            </Link>

                        </div>
                    </div>


                    <div className="cta hidden md:block">
                        <Link to="/apply">
                            <button className='bg-[#bced00] shadow-[0px_0px_10px_1px] shadow-title/70 rounded-3xl px-4 md:px-5 py-1 md:py-2 text-sm sm:text-base font-medium'>Apply Now</button>
                        </Link>
                    </div>

                    <div className='flex md:hidden items-center'>
                        <Hamburger toggle={toggleMenu} isOn={isOpen} />
                    </div>
                </div>

                <div className={` md:hidden overflow-hidden text-white flex items-center justify-center transition-all duration-300 ease-in-out  ${isOpen ? "h-fit p-5" : "h-0"}`}>
                    <div className="space-y-4 flex flex-col items-center justify-center">
                        <div>
                            <Link to="/" onClick={closeMenu}>
                                <p>Home </p>
                            </Link>
                        </div>
                        <div>
                           <Dropdown title="Programs" items={programs}  />
                        </div>
                        <div>
                            <Link to="/global" onClick={closeMenu}>
                                <p>Global Exposure</p>
                            </Link>
                        </div>
                        <div className="cta">
                            <Link to="/apply">
                                <button className='bg-[#bced00] shadow-[0px_0px_10px_2px] shadow-title text-black  rounded-3xl px-5 py-2 text-sm sm:text-base font-medium'>Apply Now</button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
