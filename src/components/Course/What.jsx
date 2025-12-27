import React from 'react'
import W1 from '../../assets/images/what/1.png'

const What = () => {
    return (
        <>
            <section className='md:max-w-6xl min-h-screen mx-auto px-5 my-20'>
                <div className='text-center px-5 '>
                    <p className='text-title uppercase'>What You’ll Be Able to Do</p>
                    <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl'>Graduate as a Full-Pipeline Artist</h1>
                    <p className='text-para'>Hands-on role-based training prepares you for both on-set & studio work</p>
                </div>
           
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative w-full h-80">
                        <img
                            src={W1}
                            alt="image"
                            className="absolute inset-0 z-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-5 left-5 z-10">
                            <p className="text-title">Compositing in Nuke</p>
                            <p className="text-white text-sm">
                                Finish film-quality shots using real compositing workflows.
                            </p>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default What
