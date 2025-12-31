import React from 'react'
import W1 from '../../assets/images/what/1.png'
import W2 from '../../assets/images/what/2.png'
import W3 from '../../assets/images/what/3.png'
import W4 from '../../assets/images/what/4.png'
import W5 from '../../assets/images/what/5.png'
import W6 from '../../assets/images/what/6.png'

const What = () => {

    const data = [
        {img: W1, title: "Compositing in Nuke", desc: "Finish film-quality shots using real compositing workflows."},
        {img: W2, title: "Shot Breakdown & Pre-Production Planning", desc: "Finish film-quality Analyze scripts and plan VFX shots like studio supervisors. using real compositing workflows."},
        {img: W3, title: "Tracking & Matchmove", desc: "Recreate camera movement digitally for CG integration."},
        // {img: W4, title: "Roto, Prep & Cleanup", desc: "Create seamless plates and roto mattes for studio pipelines."},
        // {img: W5, title: "Virtual Production & LED Volume", desc: "Work on real-time LED stages like modern film studios."},
        // {img: W6, title: "Internship + Showreel Portfolio", desc: "Graduate with a professional showreel ready for hiring."}
    ]

    return (
        <>
            <section className=' xl:px-20 lg:px-15 md:px-10  px-5 md:my-20 my-10'>
                <div className='text-center px-5 '>
                    <p className='text-title uppercase font-semibold mb-2'>What You’ll Be Able to Do</p>
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
