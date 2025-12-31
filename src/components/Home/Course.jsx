import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CourseCard from './CourseCard'
import C1 from '../../assets/images/courses/c1.webp'
import C2 from '../../assets/images/courses/c2.webp'
import C3 from '../../assets/images/courses/c3.webp'
import C4 from '../../assets/images/courses/c4.webp'
import C5 from '../../assets/images/courses/c5.webp'
import C6 from '../../assets/images/courses/c6.webp'
import { ArrowRightIcon } from '@phosphor-icons/react'

const Course = () => {

    const courses = [
        {
            id: 1, image: C1, title: "One-Year VFX Mastery Program", desc: [
                "Master the art of combining live-action footage with CGI elements.",
                "Learn advanced keying, tracking, cleanup, and photoreal integration.",
                "Work with multi-pass renders, AOVs, and complex Nuke node networks.",
                "Perfect for those aiming to become high-end compositors in studios."
            ]
        },
          {
            id: 2, image: C2, title: "3D Animation & Character Movement", desc: [
                "Build strong foundations in 3D animation principles and character motion.",
                "Learn walk cycles, body mechanics, facial acting, and timing.",
                "Practice in a production-style environment using Maya and Blender.",
                "Perfect for students wanting to enter character animation roles."
            ]
        },
          {
            id: 3, image: C3, title: "Motion Graphics & Digital Design", desc: [
                "Learn to design dynamic motion graphics for films, ads, and digital media.",
                "Understand typography, visual rhythm, and animation timing.",
                "Create broadcast-quality graphics and title animations.",
                "Ideal for those interested in motion design and creative storytelling."
            ]
        },
        //   {
        //     id: 4, image: C4, title: "Virtual Production & Unreal Engine Pipeline", desc: [
        //         "Discover how real-time 3D tools power modern filmmaking.",
        //         "Learn Unreal Engine for environments, lighting, and in-camera VFX.",
        //         "Train in LED volume workflows and tracking systems.",
        //         "Perfect for future virtual production technicians and environment artists."
        //     ]
        // },
        //   {
        //     id: 5, image: C5, title: "Matchmove, Tracking & Camera Solving", desc: [
        //         "Understand how to recreate real camera motion in 3D space.",
        //         "Work with 2D, planar, and 3D tracking using PFTrack and Syntheyes.",
        //         "Solve lenses, match CG to live footage, and prepare shots for CG teams.",
        //         "Perfect for roles like Matchmove Artist or Layout Artist."
        //     ]
        // },
        //   {
        //     id: 6, image: C6, title: "Digital Sculpting & Character Creation", desc: [
        //         "Dive into the world of 3D character and creature sculpting.",
        //         "Learn anatomy, form, detailing, and texturing workflows.",
        //         "Create high-resolution models ready for animation and rendering.",
        //         "Ideal for students who want to become character or creature artists."
        //     ]
        // }

    ]

    return (
        <>
            <section className='py-10  '>
                <div className='text-center px-5 '>
                    <p className='text-title font-semibold mb-2'>COURSES</p>
                    <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl mb-2'> Level Up Your Skills with Our Most In-Demand VFX Programs</h1>
                    <p className='text-para'>Explore specialised courses designed to prepare you for real studio workflows across VFX, Filmmaking, Animation, and Virtual Production.</p>
                </div>
                <p className='md:flex justify-end items-center text-para/80 italic hidden w-[94%] my-3 gap-4'>* Swipe <ArrowRightIcon size={20}/></p>

                <div className="my-10 px-0">
                    <p className='text-para/80 text-center italic my-4 md:hidden block'>(* Click to see Course Details)</p>
            
                <Carousel >
                    <CarouselContent className="xl:ps-20 lg:ps-15 md:ps-10 ps-5 flex items-center justify-center
                    ">
                        {courses.map((course) => (
                            <CarouselItem className="md:basis-1/3  lg:basis-1/4 sm:basis-1/2 basis-full " key={course.id}>
                                <CourseCard
                                image={course.image}
                                    title={course.title}
                                    desc={course.desc}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


                </div>


            </section>

        </>
    )
}

export default Course
