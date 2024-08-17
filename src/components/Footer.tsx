import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    const data = [
        {label: 'About', url: '/about'},
        {label: 'Contact', url: '/contact'},
        {label: 'Privacy', url: '/privacypolicy'},
        {label: 'Terms', url: '/termsservice'},
        {label: 'Cookies', url: '/cookies'},
        {label: 'DMCA', url: '/dmca'},
    ]

    return (
        <footer className='w-full'>
            <div className="w-full lg:hidden">
                {data.map((item, index) => (
                    <Link 
                        href={item.url} 
                        key={index} 
                        className="flex gap-3 py-2 font-semibold px-3 text-white text-base hover:text-zinc-500"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                        {item.label}
                    </Link>
                ))}

                <p className='text-white text-sm mt-10 px-7 py-10'>© {process.env.PROJECTNAME} 2024 <br/> ® - Your PDF Editor</p>


            </div>
            <div className="w-full hidden lg:flex items-end justify-between">
                <p className='text-white text-sm mt-10 px-7 py-10'>© {process.env.PROJECTNAME} 2024 <br/> ® - Your PDF Editor</p>
                <div className="w-1/2 flex flex-wrap py-6 pb-16">
                    {data.map((item, index) => (
                        <Link 
                            href={item.url} 
                            key={index} 
                            className="flex gap-3 py-2 w-[45%] px-3 text-white text-base hover:text-zinc-500"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            {item.label}
                        </Link>
                    ))}
                </div>



            </div>
        </footer>
    )
}
