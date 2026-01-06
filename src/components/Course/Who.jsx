import React from 'react'
import Mentor1 from '../../assets/images/mentor/11.png'
import Mentor2 from '../../assets/images/mentor/22.png'
import Mentor3 from '../../assets/images/mentor/33.png'
import Mentor4 from '../../assets/images/mentor/44.png'
import Mentor5 from '../../assets/images/mentor/55.png'



const Who = () => {

    const data = [
        {
            img: Mentor1,
            title: "Ritto Prabu",
            desc: "VFX & VP HOD at Cinema Factory"
        },
        {
            img: Mentor2,
            title: "Cam Sharpe",
            desc: "Compositor"
        },
        {
            img: Mentor3,
            title: "Marina Hiromi",
            desc: "Compositor/Moiton Graphic"
        },
        {
            img: Mentor4,
            title: "Miguel Basulto",
            desc: "Compositor"
        },
        {
            img: Mentor5,
            title: "Ken Simpson",
            desc: "Compositor"
        },
    ]

    return (
        <>
            <section className='md:py-20 py-10 xl:px-20 lg:px-15 md:px-10 px-5 '>
                <div className='text-center '>
                    <p className='text-title uppercase mb-2'>Expert Guidance</p>
                    <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl mb-2'>Meet the Mentors Behind Your VFX Journey</h1>
                    <p className='text-para'>Learn directly from professionals who have worked on real films, series, and visual effects projects</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 my-10 px-4'>
                    {data.slice(0, 3).map((item, index) => (
                        <div className=' rounded-2xl  text-center mb-3 p-5' key={index}>
                            <div className='bg-linear-to-b relative from-title via-title/20 to-transparent w-full h-[full] rounded-xl'>
                                <img src={item.img} alt="image" className='w-auto h-70 mx-auto object-cover' />
                                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/10
                                 to-transparent"></div>
                            </div>

                            <p className='text-white font-semibold mt-2 uppercase'> {item.title}</p>
                            <p className='text-para  w-[90%] mx-auto mt-1 '>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:w-[70%] mx-auto md:gap-12 gap-6 my-10 px-4'>
                    {data.slice(3, 5).map((item, index) => (
                        <div className=' rounded-2xl  text-center mb-3 p-5' key={index}>
                            <div className='bg-linear-to-b relative from-title via-title/20 to-transparent w-full h-[full] rounded-xl'>
                                <img src={item.img} alt="image" className='w-auto h-70 mx-auto object-cover' />
                                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/10
                                 to-transparent"></div>
                            </div>

                            <p className='text-white font-semibold mt-2 uppercase'> {item.title}</p>
                            <p className='text-para  w-[90%] mx-auto mt-1 '>{item.desc}</p>
                        </div>
                    ))}
                </div>


            </section>

        </>
    )
}

export default Who
