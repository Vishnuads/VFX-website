import React, { useState } from 'react'
import StepItem from './StepItem';
import S1 from '../../assets/images/step/step.png'
import S2 from '../../assets/images/step/2.png'
import S3 from '../../assets/images/step/3.png'
import S4 from '../../assets/images/step/4.png'
import S5 from '../../assets/images/step/5.png'
import S6 from '../../assets/images/step/6.png'

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
      image: S2,
      title: "End-to-End VFX Pipeline",
      details: "Learn the complete workflow: planning VFX shots, capturing data on set, and understanding how footage moves through the pipeline from shoot to final delivery."
    },
      {
      step: "Stage 03",
      image: S3,
      title: "Nuke Compositing: Basic to Advanced",
      details: "Master industry-standard compositing in Nuke — from rotoscoping and clean-ups to multi-pass CG integration, deep compositing, and studio delivery formats."
    },
      {
      step: "Stage 04",
      image: S4,
      title: "Department Specialization",
      details: "Advance technical skills across roto, prep/paint, matchmove, FX integration, and production workflow — preparing for real studio collaboration."
    },
      {
      step: "Stage 05",
      image: S5,
      title: "Virtual Production & Motion Capture",
      details: "Explore future-ready workflows — Unreal Engine, LED walls, mocap suits, and real-time in-camera VFX shooting with tracked cameras."
    },
    ,
      {
      step: "Stage 06",
      image: S6,
      title: "Internship, Show-Reel & Career Launch",
      details: "Work on real studio shots, build an industry-approved show-reel, and step into your first job role with professional confidence."
    },
  ];

   const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="xl:px-20 lg:px-15 md:px-10 px-5  md:my-20 my-10">
      <div className='text-center px-5 '>
        <p className='text-title font-semibold mb-2'>ROADMAP</p>
        <h1 className='text-white text-3xl lg:text-4xl xl:text-5xl mb-2'>Your Journey to Studio Production</h1>
        <p className='text-para'>Learn step-by-step from foundation to industry specialization</p>
      </div>
      <div className=' my-10'>
        {stepData.map((item, index) => (
          <StepItem key={index} step={item.step} title={item.title} details={item.details} image={item.image} toggle={() => handleToggle(index)} isOpen={openIndex === index} />
        ))}
      </div>
    </section>
  );
};

export default RoadMap
