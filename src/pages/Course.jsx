import CTA from '@/components/Course/CTA'
import Expect from '@/components/Course/Expect'
import Hero from '@/components/Course/Hero'
import Overview from '@/components/Course/Overview'
import RoadMap from '@/components/Course/RoadMap'
import Timeline from '@/components/Course/Timeline'
import Tools from '@/components/Course/Tools'
import What from '@/components/Course/What'
import Why from '@/components/Course/Why'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const Course = () => {
    return (
        <>
            <section className='bg-[#141414]'>
                <Navbar />
                <Hero />
                <Overview/>
                <RoadMap/>
                <Timeline/>
                <What/>
                <Expect/>
                <Tools/>
                <Why/>
                <CTA/>
                <Footer />
            </section>

        </>
    )
}

export default Course
