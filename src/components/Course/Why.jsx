import React from 'react'
import W1 from '../../assets/images/why/1.png'
import W2 from '../../assets/images/why/2.png'
import W3 from '../../assets/images/why/3.png'
import W4 from '../../assets/images/why/4.png'

const Why = () => {

    const img =[W1, W2, W3, W4]

  return (
    <section className='md:my-20 my-10 xl:px-20 lg:px-15 md:px-10 px-5'>
        <div className='text-center px-5 '>
        <p className='text-title font-semibold uppercase'>Why Choose Cinema Factory</p>
        <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl'>Learn from the Best in the Industry</h1>
        <p className='text-para'>World-class mentors. Studio-grade ecosystem.</p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 my-10">
        {img.map((i, idx)=>(
        <div key={idx} className='flex items-center justify-center'>
            <img src={i} alt="image"  className='h-40 w-50 object-contain'/>
        </div>
        ))}
      </div>

      
    </section>
  )
}

export default Why
