import Link from 'next/link';
import React from 'react'

interface ButtonProps {
  label: string;
  link: string;
  bg?: boolean;
}

export const Button1: React.FC<ButtonProps> = ({ label, link, bg }) =>{
  return (
    <Link href={link}>
      <button className={` ${bg ? 'bg-zinc-700 hover:bg-zinc-900' : 'bg-transparent'} hidden lg:inline-block text-white py-1 px-4 rounded capitalize text-sm`}>
        {label}
      </button>
    </Link>
  )
}
