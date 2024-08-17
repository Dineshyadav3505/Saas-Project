'use client'
import Link from "next/link";
import { Button1 } from "./Button1";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
  

interface NavItem {
    label: string;
    link: string;
}


export default function Navbar() {
    const data: NavItem[] = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
    ];

    const [active, setActive] = useState<string | null>(null);

    return (

        <nav className="flex justify-between gap-3 bg-black items-center w-[88vw] max-w-xl text-sm sticky top-10 text-white px-5 py-3 mx-auto mt-10 rounded-full border-[1px] border-zinc-700">
            <ul className="flex space-x-10 lg:space-x-20 w-full justify-center">
                {data.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} className=" text-sm capitalize">
                            {item.label}
                        </Link>
                    </li>
                ))}
                <MenuItem setActive={setActive} active={active} item="Menu">
                    <div className="flex flex-col space-y-4 text-sm ">
                        <HoveredLink href="/login">LogIn</HoveredLink>
                        <HoveredLink href="/signup">SignUp</HoveredLink>
                        <HoveredLink href="/cookies">Cookies Policy</HoveredLink>
                        <HoveredLink href="/dmca">DMCA</HoveredLink>
                        <HoveredLink href="/privacypolicy">Privacy Policy</HoveredLink>
                        <HoveredLink href="/termsservice">Terms of Service</HoveredLink>
                    </div>
                </MenuItem>
            </ul>
        </nav>
    );
}