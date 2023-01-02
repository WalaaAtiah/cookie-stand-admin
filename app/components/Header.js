import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


export default function Header(){
    return(
        <header>
            <nav className='flex flex-wrap items-center px-3 bg-[#3FA4B0]'>
                <Link className='inline-flex items-center px-2 mr-4' href='/'>
                    <Image 
                    src="/assets/logo2.png"
                    width={70}
                    height={50}
                    alt="cookie logo"
                    >
                    </Image>
                   
                    <span className='text-xl fonr-bold tracking-wide text-black uppercase ml-5 px-3 py-2 rounded font-bold- hover:bg-cyan-700 hover:text-white'>Cookie Stand Admin</span>
                </Link>
                <section className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                    <section className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-black rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Home</Link>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-black rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/about'>About Us</Link>
                        <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-black rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/contactUs'>Contact Us</Link>
                    </section>
                </section>
            </nav>
        </header>
    )
}