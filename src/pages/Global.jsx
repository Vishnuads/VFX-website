import Guest from '@/components/Global/Guest'

import ExperienceTabs from '@/components/Global/ExperienceTabs'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const Global = () => {
    return (
        <>
            <section className='bg-[#141414]'>
                <Navbar />
                
                <ExperienceTabs />
                <Guest/>
                <Footer />
            </section>
        </>
    )
}

export default Global
