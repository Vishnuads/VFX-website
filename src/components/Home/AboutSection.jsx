import React from 'react'

const AboutSection = () => {
  return (
    <>
      <section className='text-white  flex justify-center items-center xl:py-20 lg:py-15 py-10 '>
        <div className="grid md:grid-cols-2 grid-cols-1  xl:px-20 lg:px-15 md:px-10 px-5 gap-3">
          <div className=''>
            <p className='text-[#bcde00] font-semibold'>ABOUT US</p>
            <h1 className='text-2xl  md:text-3xl lg:text-4xl xl:text-5xl line-clamp-2 my-3 w-fit'>PROFESSIONAL VFX TRAINING at
             <br /> CINEMAFACTORY ACADEMY</h1>
            <p className='text-[#8B8B8B] '>At Cinema Factory Academy, we deliver focused, hands-on VFX training built to match the standards of today’s leading global studios. Our programs are designed for artists who want a deep, production-ready understanding of the VFX, Filmmaking, and Virtual Production pipeline.
              Our curriculum combines Compositing, Matchmove, Prep, FX, Virtual Production, and AI-Integrated Workflows, giving students the technical foundation and real-world experience needed to succeed. With experienced mentors, industry-grade tools, and a practice-first learning model, students gain the confidence and skillset studios expect.</p>

          </div>
          <div className='flex items-center justify-center px-5'>
            <iframe
              // width={520}
              // height={315}
              className='w-full md:h-full h-[250px]'
              src="https://www.youtube.com/embed/j-C7gtxjRTk?si=O2a2WFem7Du--wG-"
              // title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection

