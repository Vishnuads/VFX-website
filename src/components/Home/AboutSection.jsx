import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const AboutSection = () => {
  return (
    <>
      <section className='text-white  flex justify-center items-center xl:py-20 lg:py-15 py-10 '>
        <div className="grid md:grid-cols-2 grid-cols-1  xl:px-20 lg:px-15 md:px-10 px-5 gap-5">
          <div className=' '>
            <p className='text-[#bcde00] font-semibold md:text-left text-center'>ABOUT US</p>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl line-clamp-2 my-3 w-full md:text-left text-center'>PROFESSIONAL VFX TRAINING at
              <br /> CINEMAFACTORY ACADEMY</h1>
            <p className='text-[#8B8B8B] text-md 2xl:text-2xl  md:text-left text-center'>At Cinema Factory Academy, we deliver focused, hands-on VFX training built to match the standards of today’s leading global studios. Our programs are designed for artists who want a deep, production-ready understanding of the VFX, Filmmaking, and Virtual Production pipeline.
              Our curriculum combines Compositing, Matchmove, Prep, FX, Virtual Production, and AI-Integrated Workflows, giving students the technical foundation and real-world experience needed to succeed. With experienced mentors, industry-grade tools, and a practice-first learning model, students gain the confidence and skillset studios expect.</p>

          </div>
          <div className='flex items-center justify-center '>
            {/* <iframe
              width={520}
              height={315}
              className='w-full md:h-full h-[250px]'
              src="https://www.youtube.com/embed/j-C7gtxjRTk?si=O2a2WFem7Du--wG-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            /> */}
            <Carousel plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]} >
              <CarouselContent>

                <CarouselItem className=" ">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="" />

                </CarouselItem>
                <CarouselItem>
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="" />
                </CarouselItem>

              </CarouselContent>
          
            </Carousel>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection

