import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import React, { useState } from 'react';


const StepItem = ({ step, title, details, image }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-cover bg-center bg-no-repeat h-fit relative ${isOpen ? 'grayscale-0': 'grayscale'} `} style={{backgroundImage: `url(${image}`}}>
            <div className="bg-linear-to-r from-black to-transparent absolute inset-0 z-0"></div>
            <button
                className="  w-full text-left relative z-10 py-5 px-5 transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
            >
                
                <div className='flex justify-between  items-center '>
                    <h1 className={`text-3xl md:text-4xl transition-colors duration-200 ${isOpen ? 'text-title' : 'text-[#ACACAC]'}`}> {step}</h1>
                    <span className="text-xl text-[#f6f6f6] transition-transform duration-400" style={{transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'}}>
                       <CaretUpIcon/> 
                    </span>
                </div>

                {isOpen && (
                    <>
                        <p className="mt-4 text-white font-semibold text-md">
                            {title}
                        </p>
                        <p className="mt-1 text-[#ACACAC] text-sm w-[70%]">
                            {details}
                        </p>
                    </>
                )}
            </button>
        </div>
    );
};

export default StepItem;