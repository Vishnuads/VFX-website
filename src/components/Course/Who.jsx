import React from 'react'

const Who = () => {

    const data = [
        {
            title: "Aspiring VFX Artists",
            desc: "Kickstart a creative career from zero"
        },
        {
            title: "Film Students",
            desc: "Master VFX workflows that elevate storytelling"
        },
        {
            title: "Working Professionals",
            desc: "Upgrade skills to advanced studio tasks"
        },
        {
            title: "Studio-Focused Careers",
            desc: "Target compositing, matchmove, VP roles"
        },
    ]

    return (
        <>
            <section className=' py-10 md:max-w-6xl md:mx-auto'>
                <div className='text-center px-5 '>
                    <p className='text-title uppercase'>Who Should Join</p>
                    <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl'>Made for Ambitious Creatives</h1>
                    <p className='text-para'>Whether you’re starting out or leveling up — this path takes you to the studio floor</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 px-4'>
                    {data.map((item, index) => (
                        <div className='bg-black rounded-2xl p-4 text-center ' key={index}>
                            <div className='bg-linear-to-t from-title via-title/20 to-transparent w-full h-60 rounded-xl'>

                            </div>
                            <p className='text-white font-semibold mt-2'> {item.title}</p>
                            <p className='text-para text-sm w-[90%] mx-auto mt-1 '>{item.desc}</p>
                        </div>
                    ))}
                </div>


            </section>

        </>
    )
}

export default Who
