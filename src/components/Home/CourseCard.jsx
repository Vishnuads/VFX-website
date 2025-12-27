import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from '@phosphor-icons/react'


const CourseCard = ({ image, title, desc }) => {

    return (
        <div className='w-full'>
            <div className="group  relative overflow-hidden">
                <div className="w-full h-[380px] group-hover:h-[450px]  transition-all duration-400 ease-in-in-out  ">
                    <img src={image} alt="Courses" className='absolute inset-0 w-full h-full object-cover' />
                    {/* <img src={C1} alt="Courses" className='absolute inset-0 object-center group-hover:scale-110 transition-all duration-500 ' /> */}

                    <div className='absolute inset-0 bg-title/70 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[2px] z-0 transition-all duration-400 ease-in-out'></div>

                    <div className="absolute inset-0 z-5 mt-5">
                        <p className='text-white text-center text-xl px-5 font-semibold group-hover:text-black transition-all duration-400 ease-in-out  mx-auto'>{title}</p>
                    </div>
                    <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-black w-[75%] my-3 transition-all duration-400 ease-in-out">
                        <div className="flex items-center justify-center ">
                            <ul className='list-disc space-y-1'>
                                {desc.map((item, index) => (
                                    <li key={index}>
                                        <p> {item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center ">
                        <Link to="/course">
                            <button className='cursor-pointer bg-title group-hover:bg-black group-hover:text-title rounded-3xl px-4 py-2 flex items-center transition-all duration-400 ease-in-out gap-2'>View Full Course <ArrowUpRightIcon /></button>
                        </Link>
                    </div>

                    <div className='absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/60
                    opacity-100 group-hover:opacity-0  z-0'></div>
                </div>
            </div>

        </div>
    )
}

export default CourseCard
