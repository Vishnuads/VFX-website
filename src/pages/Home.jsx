import AboutSection from '@/components/Home/AboutSection'
import Accredit from '@/components/Home/Accredit'
import Course from '@/components/Home/Course'
import Footer from '@/components/Home/Footer'
import Hero from '@/components/Home/Hero'
import Hiring from '@/components/Home/Hiring'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const Home = () => {
    return (
        <>
            <div className="bg-[#141414]">
                <Navbar />
                <Hero />
                <Hiring />
                <AboutSection/>
                <Course/>
                <Accredit/>
                <Footer/>
            </div>

        </>
    )
}

export default Home
