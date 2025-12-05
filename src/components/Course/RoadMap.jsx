import React from 'react'
import StepItem from './StepItem';
import S1 from '../../assets/images/step1.png'

const RoadMap = () => {
  const stepData = [
    {
      step: "Stage 01",
      image: S1,
      title: "Film & VFX Foundations",
      details: "Understand how movies and VFX are made from cameras and lighting to green screens and post-production. Learn the essential terminology, workflows, and studio roles."
    },
    {
      step: "Stage 02",
      image: S1,
      title: "Film & VFX Foundations",
      details: "Understand how movies and VFX are made from cameras and lighting to green screens and post-production. Learn the essential terminology, workflows, and studio roles."
    },
      {
      step: "Stage 03",
      image: S1,
      title: "Film & VFX Foundations",
      details: "Understand how movies and VFX are made from cameras and lighting to green screens and post-production. Learn the essential terminology, workflows, and studio roles."
    },
      {
      step: "Stage 04",
      image: S1,
      title: "Film & VFX Foundations",
      details: "Understand how movies and VFX are made from cameras and lighting to green screens and post-production. Learn the essential terminology, workflows, and studio roles."
    },
      {
      step: "Stage 05",
      image: S1,
      title: "Film & VFX Foundations",
      details: "Understand how movies and VFX are made from cameras and lighting to green screens and post-production. Learn the essential terminology, workflows, and studio roles."
    },
  ];

  return (
    <section className="container  my-20">
      <div className='text-center px-5 '>
        <p className='text-title'>ROADMAP</p>
        <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl'>Your Journey to Studio Production</h1>
        <p className='text-para'>Learn step-by-step from foundation to industry specialization</p>
      </div>
      <div className='md:max-w-5xl mx-auto px-3 my-5'>
        {stepData.map((item, index) => (
          <StepItem key={index} step={item.step} title={item.title} details={item.details} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default RoadMap
