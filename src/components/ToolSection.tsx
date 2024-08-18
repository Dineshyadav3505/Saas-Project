import React from 'react';
import Card from './Card';
import Image from 'next/image';
import Link from 'next/link';

const CustomDiv = () => {
    const data: DataItem[] = [
        { img: "/images/sample1.jpg", label: "Sample 1", description: "This is a sample description 1", link: "/sample1" },
        { img: "/images/sample2.jpg", label: "Sample 2", description: "This is a sample description 2", link: "/sample2" },
        { img: "/images/sample3.jpg", label: "Sample 3", description: "This is a sample description 3", link: "/sample3" },
        { img: "/images/sample4.jpg", label: "Sample 4", description: "This is a sample description 4", link: "/sample4" },
        { img: "/images/sample5.jpg", label: "Sample 5", description: "This is a sample description 5", link: "/sample5" },
        { img: "/images/sample6.jpg", label: "Sample 6", description: "This is a sample description 6", link: "/sample6" },
    ];

    interface DataItem {
        label: string ;
        img: string;
        description: string;
        link: string; 
    }

    return (
    <div className="relative min-h-screen px-5 lg:px-20 ">
        <div className=" min-h-10 shadow-md py-5 md:px-8 flex  flex-wrap gap-3 lg:py-10">
            {data.map((item, index) => (
                <Link key={index} href={item.link} className="w-full md:w-56 gap-2 bg-[#9e9e9e] flex lg:flex-col rounded-sm h-24 md:h-56 relative p-2 ">
                    <Image
                        src={item.img}
                        className="object-cover rounded-sm bg-black"
                        alt="Description of the image"
                        width={80}
                        height={80}
                    />
                    <div className="">
                        <h1 className='text-white text-base py-1 capitalize'>{item.label}</h1>
                        <h6 className='text-white text-sm'>{item.description}</h6>
                    </div>
                </Link>
            ))}
        </div>

    </div>
  );
};

export default CustomDiv;