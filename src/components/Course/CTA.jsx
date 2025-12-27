import React from "react";
import Im from "../../assets/images/cc.png";
import { Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="xl:px-20 lg:px-16 md:px-10 px-5 md:my-20 my-10">
      <div className="relative mx-auto md:w-[80%] w-full  h-[240px] md:h-[300px] rounded-3xl overflow-hidden">
        
        {/* Background Image */}
        <img
          src={Im}
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          
          <span className="text-lime-400  font-semibold mb-2">
            JOIN US
          </span>

          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-3">
            READY TO START YOUR CAREER IN VFX?
          </h1>

          <p className="text-white/80 text-sm md:text-base mb-6">
            Limited seats · Interview-based admission
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-5 py-2 rounded-full bg-title text-black font-semibold cursor-pointer transition">
              Apply Now
            </button>

            <button className="px-5 py-2 rounded-full border border-title text-title font-semibold flex items-center gap-2 hover:bg-title hover:text-black transition">
              Download Brochure
              <Download/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
