import React from 'react'
import W1 from '../../assets/images/what/01.webp'
import W2 from '../../assets/images/what/02.webp'
import W3 from '../../assets/images/what/03.webp'


const What = () => {

    const data = [
        {img: W1, title: "On-Set VFX Assistant", desc: "Assists VFX team by capturing on-set data and references"},
        {img: W2, title: "On-Set VFX Supervisor Assistant", desc: "Supports VFX supervision, ensuring accurate execution during live-action shoots."},
        {img: W3, title: "Junior Compositing Artist", desc: "Composites CGI and live footage into visually seamless final shots."},
        // {img: W4, title: "Roto, Prep & Cleanup", desc: "Create seamless plates and roto mattes for studio pipelines."},
        // {img: W5, title: "Virtual Production & LED Volume", desc: "Work on real-time LED stages like modern film studios."},
        // {img: W6, title: "Internship + Showreel Portfolio", desc: "Graduate with a professional showreel ready for hiring."}
    ]

    return (
        <>
            <section className=' md:max-w-6xl mx-auto  px-5  my-10'>
                <div className='text-center px-5 '>
                    <p className='text-title uppercase font-semibold mb-2'>What You’ll Be Able to Became</p>
                    <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl mb-2'>Graduate as a Full-Pipeline Artist</h1>
                    <p className='text-para'>Hands-on role-based training prepares you for both on-set & studio work</p>
                </div>
           
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
                    {data.map((d, idx)=>(
                        
                    <div className="relative w-full  h-60 rounded-2xl overflow-hidden" key={idx}>
                        <img src={d.img} alt="image"
                            className="absolute inset-0 z-10 w-full h-full object-cover " />
                            <div className="absolute inset-0 z-15 bg-linear-to-t from-[#141414] to-transparent"></div>
            
                        <div className="absolute bottom-5 left-3 z-20">
                            <p className="text-title font-semibold mb-1 ">{d.title}</p>
                            <p className="text-white text-xs ">{d.desc}</p>
                        </div>
                    </div>
      
                    ))}
                </div>
            </section>

        </>
    )
}

export default What
