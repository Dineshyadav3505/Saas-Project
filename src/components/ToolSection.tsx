import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CustomDiv = () => {
    const data: DataItem[] = [
        { img: "/img/merge.png", label: "Merge PDF", description: "Combine your PDFs in the order you want, quickly and easily.", link: "/merge" },
        { img: "/img/compress.png", label: "Compress PDF", description: "Quickly compress your PDFs for easier sharing.", link: "/compress" },
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
                <Link key={index} 
                href={{
                    pathname: item.link,
                }}
                className="w-full md:w-56 gap-2 bg-[#9e9e9e] flex lg:flex-col rounded-sm h-24 md:h-56 relative p-2 ">
                    <Image
                        src={item.img}
                        className="object-cover rounded-sm"
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