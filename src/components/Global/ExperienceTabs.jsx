import { useState } from "react"
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import I1 from '../../assets/images/Bangkok/(63).jpeg'
import I2 from '../../assets/images/Bangkok/(2).jpeg'
import I3 from '../../assets/images/Bangkok/(10).jpeg'
import I4 from '../../assets/images/Bangkok/86.jpg'
import I5 from '../../assets/images/Bangkok/(49).jpeg'
import I6 from '../../assets/images/Bangkok/(62).jpeg'
import I7 from '../../assets/images/Bangkok/(83).jpeg'

import S1 from '../../assets/images/Bangkok/Studio/(15).jpeg'
import S2 from '../../assets/images/Bangkok/lab/(1).jpeg'
import S3 from '../../assets/images/Bangkok/lab/8.png'
import S4 from '../../assets/images/Bangkok/lab/11.jpg'
import S5 from '../../assets/images/Bangkok/lab/7.jpeg'

import W1 from '../../assets/images/Bangkok/workshop/(4).jpeg'
import W2 from '../../assets/images/Bangkok/workshop/(2).webp'
import W3 from '../../assets/images/Bangkok/workshop/(5).webp'
import W4 from '../../assets/images/Bangkok/workshop/(6).webp'
import W5 from '../../assets/images/Bangkok/workshop/11.webp'

export default function ExperienceTabs() {

  const tabs = [
    {name:"Global Collaborations", key: 'inter'},
    {name: "Studio", key: 'stu'},
    {name:  "Workshop", key: 'wrk'}
  ]

  const images = {
    inter: [I1, I2, I3, I4, I5, I6, I7],
    stu: [S1, S2, S3, S4, S5],
    wrk: [W1, W5, W3, W4, W2]
  }

  const [activeTab, setActiveTab] = useState("inter")

  return (
    <section className="w-full px-4 py-15 max-w-6xl mx-auto md:py-30">
      <div className='text-center '>
        <p className='text-title uppercase mb-2'>World-Class Training</p>
        <h1 className='text-white text-3xl  md:text-4xl lg:text-5xl xl:text-6xl mb-2'>International Exposure & Training</h1>
        <p className='text-para'>Global trips, studio practice, and hands-on workshops</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center w-fit mx-auto p-2 rounded-lg gap-3 mb-10 flex-wrap my-5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-2   text-sm md:text-base font-medium transition
              ${activeTab === tab.key
                ? "border-title border-b-2 text-title"
                : "text-white"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
        {images[activeTab].map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl group
              ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            `}
          >
            <img
              src={img}
              alt={activeTab}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
          </div>
        ))}
      </div> */}

      <BentoGrid className="max-w-6xl mx-auto px-5">
        {images[activeTab].map((img, i) => (
          <BentoGridItem
            key={i}
            //   title={item.title}
            //   description={item.description}
            header={img}
            //   icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

    </section>
  )
}
