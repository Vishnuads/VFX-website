import React from 'react'
import Img1 from '../../assets/images/course.webp'

const Expect = () => {

    const data = [
        { img: Img1, title: "PRACTICAL", sub: "Hands-on Production", desc: "Students are presented 18 to 20 shots to complete for their demo reels. These shots are designed specifically to demonstrate Rotoscoping, Keying, Paint & Integration competency, and also provide the student an avenue to showcase their excellence in execution." },
        { img: Img1, title: "studio experience", sub: "From school to studio", desc: "Simulate the full studio pipeline through collaborative projects and real production challenges. On campus, students also complete a short-term practicum, gaining hands-on experience directly within the industry." },
        { img: Img1, title: "industry insight", sub: "inside the industry", desc: "Weekly Review of student’s work, one-on-one mentorship, periodic script reviews, all given by the instructors with pixel accuracy to ready you for Studio Dailies." },
        { img: Img1, title: "Review", sub: "Real Time Feedback", desc: "If you want a career in visual effects, not only do you need to know how to do shots, you also need to know how to get Jobs. Learn how to create a demo reel, breakdowns, portfolio site, manage your money, set goals, apply for jobs, and learn the dark art of soft studio skills." },
        { img: Img1, title: "Career prep", sub: "Get Studio-ready", desc: "Simulate the full studio pipeline through collaborative projects and real production challenges. On campus, students also complete a short-term practicum, gaining hands-on experience directly within the industry." },

    ]
    return (
        <>
            <section className='md:py-20 py-10 xl:px-20 lg:px-15 md:px-10 px-5 '>
                <div className='text-center '>
                    <p className='text-title uppercase mb-2'>Expert Guidance</p>
                    <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl mb-2'>WHAT TO EXPECT</h1>
                    <p className='text-para'>Learn directly from professionals who have worked on real films, series, and visual effects projects</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
                    {data.slice(0, 3).map((d, idx) => (
                        <div className="relative w-full h-80 group transition-all duration-500 ease-in-out" key={idx}>

                            <img
                                src={d.img}
                                alt="image"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 opacity-100 bg-black/40 group-hover:opacity-0 flex flex-col items-center justify-center text-white text-center transition-all duration-500 ease-in-out">
                                <p className="text-3xl font-bold uppercase">{d.title}</p>
                                <p className="text-lg uppercase">{d.sub}</p>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-white text-center bg-black/80 transition-all duration-500 ease-in-out">
                                <p className="text-md w-[90%] mx-auto">{d.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 md:w-[70%] mx-auto">
                    {data.slice(3, 5).map((d, idx) => (
                        <div className="relative w-full h-80 group transition-all duration-500 ease-in-out" key={idx}>

                            <img
                                src={d.img}
                                alt="image"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 opacity-100 bg-black/40 group-hover:opacity-0 flex flex-col items-center justify-center text-white text-center transition-all duration-500 ease-in-out">
                                <p className="text-3xl font-bold uppercase">{d.title}</p>
                                <p className="text-lg uppercase">{d.sub}</p>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-white text-center bg-black/80 transition-all duration-500 ease-in-out">
                                <p className="text-md w-[90%] mx-auto">{d.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </>
    )
}

export default Expect
