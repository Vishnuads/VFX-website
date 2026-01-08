import React from "react";

// Software Logos
import Nuke from "../../assets/images/tools/nu.png";
import Silhouette from "../../assets/images/tools/si.png";
import Photoshop from "../../assets/images/tools/ps.png";
import Maya from "../../assets/images/tools/my.png";
import Unreal from "../../assets/images/tools/ue.png";
import Houdini from "../../assets/images/tools/hu.png";
import Equalizer from "../../assets/images/tools/3d.png";

const toolsData = [
    {
        department: "Roto",
        softwares: [
            { name: "SilhouetteFX", logo: Silhouette },
            { name: "Nuke", logo: Nuke },
        ],
    },
    {
        department: "Prep & Paint",
        softwares: [
            { name: "Nuke", logo: Nuke },
            { name: "Photoshop", logo: Photoshop },
        ],
    },
     {
        department: "3D",
        softwares: [
            { name: "Unreal Engine", logo: Unreal },
            { name: "Maya", logo: Maya },
        ],
    },
    {
        department: "Compositing",
        softwares: [{ name: "Nuke", logo: Nuke }],
    },
  
     {
        department: "Matchmove",
        softwares: [
            { name: "3D Equalizer", logo: Equalizer },
            { name: "Maya", logo: Maya },
            { name: "Unreal Engine", logo: Unreal },
        ],
    },
    {
        department: "FX",
        softwares: [
            { name: "Houdini", logo: Houdini },
            { name: "Unreal Engine", logo: Unreal },
        ],
    },
];

const logos = [
    { img: Nuke, name: "Nuke", department: ["Roto", "Composting", "Prep & paint"] },
    { img: Silhouette, name: "Silhouette", department: ["Roto"] },
    { img: Unreal, name: "Unreal Engine", department: ["Matchmove", "FX", "3D"] },
    { img: Houdini, name: " Houdini", department: ["FX"] },
    { img: Equalizer, name: " 3D Equalizer", department: ["Matchmove"] },
    { img: Maya, name: "Maya", department: ["Matchmove", "3D"] },
    { img: Photoshop, name: "Photoshop", department: [" Prep & paint"] },
    ,];

const Tools = () => {
    return (
        <section className="md:max-w-6xl mx-auto px-5 md:mb-24 mb-14">

            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-title uppercase font-semibold mb-2">
                    OUR TOOLSET
                </p>
                <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl mb-3">
                    Master the Same Tools Used in Top VFX Studios
                </h1>
                <p className="text-para max-w-2xl mx-auto">
                    Train hands-on with the exact tools used in real-world film and OTT
                    productions.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {toolsData.slice(0,4).map((dept, idx) => (
                    <div
                        key={idx}
                        className="group rounded-2xl border border-white/10 bg-black backdrop-blur-md p-6 hover:border-lime-400/60 transition-all duration-300 hover:shadow-[0px_0px_20px_2px] shadow-title/50"
                    >

                        <p className="text-white  text-xl font-semibold mb-5 group-hover:text-lime-400 transition">
                            {dept.department}
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                            {dept.softwares.map((tool, i) => (
                                <div key={i} className="flex items-center justify-center" >
                                    <img
                                        src={tool.logo}
                                        alt={tool.name}
                                        className="h-auto w-24 object-contain md:grayscale group-hover:grayscale-0 transition"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* {logos.map((l, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="text-center">
                            <img src={l.img} alt="software logo " className=" w-auto h-24" />
                            <p className="text-title">{l.name}</p></div>
                        <span>  <p className="text-gray-400">Department :</p>
                            {l.department.map((d, idx) => (
                                <div className="">
                                    <p key={idx} className="text-white "> {d},</p></div>
                            ))}

                        </span>
                    </div>
                ))} */}
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-4  my-5">
                {toolsData.slice(4,6).map((dept, idx) => (
                    <div
                        key={idx}
                        className="group rounded-2xl border border-white/10 bg-black backdrop-blur-md p-6 hover:border-lime-400/60 transition-all duration-300 hover:shadow-[0px_0px_20px_2px] shadow-title/50"
                    >

                        <p className="text-white  text-xl font-semibold mb-5 group-hover:text-lime-400 transition">
                            {dept.department}
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                            {dept.softwares.map((tool, i) => (
                                <div key={i} className="flex items-center justify-center" >
                                    <img
                                        src={tool.logo}
                                        alt={tool.name}
                                        className="h-auto w-24 object-contain md:grayscale group-hover:grayscale-0 transition"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Tools;
