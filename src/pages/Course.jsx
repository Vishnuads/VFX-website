import Hero from '@/components/Course/Hero'
import Overview from '@/components/Course/Overview'
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
                <Footer />
            </section>

        </>
    )
}

export default Course
