import React from 'react'
import G1 from '../../assets/images/guest/1.png'
import G2 from '../../assets/images/guest/2.png'
import G3 from '../../assets/images/guest/3.png'
import G4 from '../../assets/images/guest/4.png'

const Guest = () => {

    const data = [
        {
            img: G1,
            title: "Paul Tairov",
            desc: "Virtual Production Supervisor",
            con: " Poland"
        },
        {
            img: G2,
            title: "Dimitri Josephine",
            desc: "Unreal Engine Authorized Instructor",
            con: " Indonesia"
        },
        {
            img: G3,
            title: "Farnoosh Shajari",
            desc: "VFX Production Manager",
            con: " Iran"
        },
        {
            img: G4,
            title: "Iman Khanchi",
            desc: "Master Animator & Animation Supervisor",
            con: " Iran"
        }
    ]

    return (
        <>
            <section className='md:pb-20 pb-10 md:max-w-6xl mx-auto px-5 '>
                <div className='text-center '>
                    <p className='text-title uppercase mb-2'>Expert Guidance</p>
                    <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl mb-2'>INTERNATIONAL GUEST lecturers</h1>
                    <p className='text-para'>Learn directly from professionals who have worked on real films, series, and visual effects projects</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  my-10 '>
                    {data.map((item, index) => (
                        <div className=' rounded-2xl  text-center mb-3 p-3 ' key={index}>
                            <div className='bg-linear-to-b relative from-title via-title/20 to-transparent w-full h-[full] rounded-xl'>
                                <img src={item.img} alt="image" className='w-auto h-70 pt-6 mx-auto object-cover' />
                                <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/10
                                 to-transparent"></div>
                            </div>

                            <p className='text-white font-semibold mt-2 uppercase'> {item.title}</p>
                            <p className='text-para  w-[90%] mx-auto mt-1 text-sm'>{item.desc}</p>
                             <p className='text-gray-200  w-[90%] mx-auto mt-1 text-sm'>{item.con}</p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Guest

