import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Img1 from '../../assets/images/about/(60).jpeg'
import Img2 from '../../assets/images/about/(63).jpeg'
import Img3 from '../../assets/images/about/(69).jpeg'
import Img4 from '../../assets/images/about/(74).jpeg'
import Img5 from '../../assets/images/about/(77).jpeg'
import Img6 from '../../assets/images/about/(79).jpeg'
import Img7 from '../../assets/images/about/(81).jpeg'



const AboutSection = () => {

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]
  return (
    <>
      <section className='text-white  flex justify-center items-center xl:py-20 lg:py-15 py-10 '>
        <div className="grid md:grid-cols-2 grid-cols-1  md:max-w-6xl mx-auto px-5 gap-5">
          <div className=' '>
            <p className='text-[#bcde00] font-semibold md:text-left text-center'>ABOUT US</p>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl line-clamp-2 my-3 w-full md:text-left text-center'>PROFESSIONAL VFX TRAINING at
              <br /> CINEMAFACTORY ACADEMY</h1>
            <p className='text-[#8B8B8B] text-md md:text-left text-center'>At Cinema Factory Academy, we deliver focused, hands-on VFX training built to match the standards of today’s leading global studios. Our programs are designed for artists who want a deep, production-ready understanding of the VFX, Filmmaking, and Virtual Production pipeline.
              Our curriculum combines Compositing, Matchmove, Prep, FX, Virtual Production, and AI-Integrated Workflows, giving students the technical foundation and real-world experience needed to succeed. With experienced mentors, industry-grade tools, and a practice-first learning model, students gain the confidence and skillset studios expect.</p>

          </div>
          <div className='flex items-center justify-center '>

            <Carousel plugins={[Autoplay({ delay: 3000 })]} opts={{ align: "start", loop: true, }}>
              <CarouselContent>
                {images.map((i, idx) => (
                  <CarouselItem className="" key={idx}>
                    <img src={i} alt="International-images" className='w-full md:h-90 h-50 object-cover' />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection

