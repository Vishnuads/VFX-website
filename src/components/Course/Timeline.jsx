import React from 'react'

const Timeline = () => {

    const time = [
        { title: "Month 1–3", para: "Foundation" },
        { title: "Month 4–5", para: "Pipeline + Nuke" },
        { title: "Month 6–8", para: "Specialization" },
        { title: "Month 9–10", para: "VP + MoCap + Live Shoot" },
        { title: "Month 11–12", para: "Internship + Show-reel" },
    ]

    return (
        <>
            <section className='md:max-w-6xl mx-auto px-5 my-20'>
                <div className='text-center px-5 '>
                    <p className='text-title uppercase'>Course Timeline</p>
                    <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl'>A Year That Changes Your Life</h1>
                    <p className='text-para'>From classroom to set — every month builds your future.</p>
                </div>
                <div className='relative'>
                    <div className='absolute top-2 left-0 w-full hidden lg:block bg-linear-to-r from-transparent via-title to-transparent h-1'></div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10">
                        {time.map((t, idx) => (
                            <div className='flex flex-col relative items-center justify-center mb-3' key={idx}>
                                <div className='absolute top-2 left-20 w-[50%] lg:hidden block  bg-linear-to-r from-transparent via-title to-transparent h-1'></div>

                                <div className='w-5 h-5 bg-title   shadow-[0px_0px_40px_5px] shadow-title rounded-full mb-3'></div>
                                <p className='text-lg text-white'>{t.title}</p>
                                <p className='text-para'>{t.para}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}

export default Timeline
