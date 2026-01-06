import React from 'react'
import { Clock, VideoCamera, Flask, Certificate, SquaresFour } from '@phosphor-icons/react'

const Overview = () => {

    const details = [
        { id: 1, icon: Clock, name: "Duration", desc: "12 Months" },
        { id: 2, icon: VideoCamera, name: "Delivery Mode", desc: "On-Campus + VFX Labs + Live Shoots" },
        { id: 3, icon: Flask, name: "Includes", desc: "Internship + Studio Project Experience" },
        { id: 4, icon: Certificate, name: "Outcome", desc: "Show-reel + Experience Letter" },
        { id: 5, icon: SquaresFour, name: "Software", desc: "Nuke, Maya, Mocha, PFTrack, Unreal Engine, Houdini basics" },
    ]
   
    return (
        <>
            <section className='md:my-20 my-10 md:max-w-6xl mx-auto px-5'>
                <div className='px-5 text-center mb-10' >
                    <p className='text-title uppercase font-semibold'>Overview</p>
                    <h1 className=' text-white text-3xl lg:text-4xl xl:text-5xl line-clamp-2 my-2  uppercase'>Program at a Glance</h1>
                    <p className='text-para '>A complete filmmaking + VFX education transforming beginners into job-ready artists</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
                      {details.slice(0, 3).map((data) => {
                        const IconComponent = data.icon;
                        return (
                            <div className='bg-black rounded-xl p-5' key={data.id} >
                                <IconComponent size={32} color="#bcde00" weight="fill" />
                                <p className='text-white font-bold my-1 text-lg'>{data.name}</p>
                                <p className='text-para'>{data.desc}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 md:max-w-[70%]  mx-auto ">
                     {details.slice(3, 5).map((data) => {
                        const IconComponent = data.icon;
                        return (
                            <div className='bg-black rounded-xl p-5 ' key={data.id} >
                                <IconComponent size={32} color="#bcde00" weight="fill" />
                                <p className='text-white font-bold my-1 text-lg'>{data.name}</p>
                                <p className='text-para'>{data.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

        </>
    )
}

export default Overview





// import React from 'react'
// import { Clock, VideoCamera, Flask, Certificate, SquaresFour } from '@phosphor-icons/react'

// const Overview = () => {
//     const details = [
//         { id: 1, icon: Clock, name: "Duration", desc: "12 Months" },
//         { id: 2, icon: VideoCamera, name: "Delivery Mode", desc: "On-Campus + VFX Labs + Live Shoots" },
//         { id: 3, icon: Flask, name: "Includes", desc: "Internship + Studio Project Experience" },
//         { id: 4, icon: Certificate, name: "Outcome", desc: "Show-reel + Experience Letter" },
//         { id: 5, icon: SquaresFour, name: "Software", desc: "Nuke, Maya, Mocha, PFTrack, Unreal Engine, Houdini basics" },
//     ]

//     return (
//         <section className='min-h-screen py-16 bg-gradient-to-b from-gray-950 via-black to-gray-950'>
//             {/* Header */}
//             <div className='px-5 text-center mb-12'>
//                 <p className='text-primary text-sm font-semibold uppercase tracking-wider mb-3'>
//                     Overview
//                 </p>
//                 <h1 className='text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl font-bold my-3 uppercase'>
//                     Program at a Glance
//                 </h1>
//                 <p className='text-gray-400 max-w-3xl mx-auto'>
//                     A complete filmmaking + VFX education transforming beginners into job-ready artists
//                 </p>
//             </div>

//             {/* Cards Container */}
//             <div className="max-w-7xl mx-auto px-5">
//                 {/* First Row - 3 Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
//                     {details.slice(0, 3).map((data) => {
//                         const IconComponent = data.icon;
//                         return (
//                             <div 
//                                 className='group bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer' 
//                                 key={data.id}
//                             >
//                                 {/* Icon Container */}
//                                 <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110'>
//                                     <IconComponent 
//                                         size={32} 
//                                         color="#BCED00" 
//                                         weight="fill"
//                                         className="transition-transform duration-300 group-hover:rotate-12"
//                                     />
//                                 </div>
                                
//                                 {/* Content */}
//                                 <p className='text-white font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300'>
//                                     {data.name}
//                                 </p>
//                                 <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
//                                     {data.desc}
//                                 </p>

//                                 {/* Bottom Accent Line */}
//                                 <div className='mt-6 h-1 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-500'></div>
//                             </div>
//                         )
//                     })}
//                 </div>

//                 {/* Second Row - 2 Cards (Centered) */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-5xl md:mx-auto">
//                     {details.slice(3, 5).map((data) => {
//                         const IconComponent = data.icon;
//                         return (
//                             <div 
//                                 className='group bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer' 
//                                 key={data.id}
//                             >
//                                 {/* Icon Container */}
//                                 <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110'>
//                                     <IconComponent 
//                                         size={32} 
//                                         color="#BCED00" 
//                                         weight="fill"
//                                         className="transition-transform duration-300 group-hover:rotate-12"
//                                     />
//                                 </div>
                                
//                                 {/* Content */}
//                                 <p className='text-white font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300'>
//                                     {data.name}
//                                 </p>
//                                 <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
//                                     {data.desc}
//                                 </p>

//                                 {/* Bottom Accent Line */}
//                                 <div className='mt-6 h-1 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-500'></div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Overview
