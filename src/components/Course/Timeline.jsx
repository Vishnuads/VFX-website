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
                    <p className='text-title uppercase font-semibold mb-2'>Course Timeline</p>
                    <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl mb-2'>A Year That Changes Your Life</h1>
                    <p className='text-para'>From classroom to set — every month builds your future.</p>
                </div>
                <div className='relative hidden lg:block'>
                    <div className='absolute top-2 left-0 w-full  bg-linear-to-r from-transparent via-title to-transparent h-1'></div>
                    <div className="grid grid-cols-5  my-10">
                        {time.map((t, idx) => (
                            <div className='flex flex-col relative items-center justify-center mb-3' key={idx}>
                                <div className='w-5 h-5 bg-title   shadow-[0px_0px_40px_5px] shadow-title rounded-full mb-3'></div>
                                <p className='text-lg text-white'>{t.title}</p>
                                <p className='text-para'>{t.para}</p>
                            </div>
                        ))}

                    </div>
                </div>
                 <div className='relative lg:hidden block'>
                    <div className='absolute -top-10 left-1/2 h-[120%] w-1  bg-linear-to-t from-transparent via-title to-transparent '></div>
                    <div className=" my-10">
                        {time.map((t, idx) => (
                            <div className='flex relative flex-col items-center justify-center mb-15' key={idx}>
                                <div className='w-5 h-5  bg-title shadow-[0px_0px_30px_3px] shadow-title rounded-full mb-3'></div>
                                <div className={`absolute top-0 mb-15  ${idx % 2 == 0 ? ' right-[55%] text-right': 'left-[55%] ' } `}>
                                <p className='md:text-lg text-white text-md'>{t.title}</p>
                                <p className='text-para md:text-md text-sm'>{t.para}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}

export default Timeline
