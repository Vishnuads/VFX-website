import AboutSection from '@/components/Home/AboutSection'
import Hero from '@/components/Home/Hero'
import Hiring from '@/components/Home/Hiring'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const Home = () => {
    return (
        <>
            <div className="bg-black ">
                <Navbar />
                <Hero />
                <Hiring />
                <AboutSection/>
            </div>

        </>
    )
}

export default Home
