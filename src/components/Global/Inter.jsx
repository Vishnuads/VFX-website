import React from 'react'
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import I1 from '../../assets/images/bangkok/(63).jpeg'
import { SlideTabs } from "../slide-tabs";
import TabsBasic from "../tabs-component";

const Inter = () => {

    const items = [
        {
            title: "The Dawn of Innovation",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: I1,
            className: "md:col-span-2",
            // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Digital Revolution",
            description: "Dive into the transformative power of technology.",
            header: I1,
            className: "md:col-span-1",
            // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Art of Design",
            description: "Discover the beauty of thoughtful and functional design.",
            header: I1,
            className: "md:col-span-1",
            // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Power of Communication",
            description:
                "Understand the impact of effective communication in our lives.",
            header: I1,
            className: "md:col-span-2",
            // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Dawn of Innovation",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: I1,
            className: "md:col-span-2",
            // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Digital Revolution",
            description: "Dive into the transformative power of technology.",
            header: I1,
            className: "md:col-span-1",
            // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Art of Design",
            description: "Discover the beauty of thoughtful and functional design.",
            header: I1,
            className: "md:col-span-1",
            // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Power of Communication",
            description:
                "Understand the impact of effective communication in our lives.",
            header: I1,
            className: "md:col-span-2",
            // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
    ];


    return (
        <>
            <section className='md:pt-30 pt-20 pb-10'>
                {/* <SlideTabs /> */}

                {/* <TabsBasic /> */}
                <BentoGrid className="max-w-6xl mx-auto px-5">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            //   title={item.title}
                            //   description={item.description}
                            header={item.header}
                            //   icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>

        </>
    )
}

export default Inter
