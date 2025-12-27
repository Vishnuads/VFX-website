import CTA from '@/components/Course/CTA'
import Hero from '@/components/Course/Hero'
import Overview from '@/components/Course/Overview'
import RoadMap from '@/components/Course/RoadMap'
import Timeline from '@/components/Course/Timeline'
import What from '@/components/Course/What'
import Who from '@/components/Course/Who'
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
                <Why/>
                <CTA/>
                {/* <Who/> */}
                <Footer />
            </section>

        </>
    )
}

export default Course
