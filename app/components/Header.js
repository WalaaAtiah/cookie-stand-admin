import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../Context/theme'
import Switch from 'react'
import "./header.css"
import { Icon } from '@iconify/react';

export default function Header() {
    const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext)
    // console.log(useContext(ThemeContext));

    return (
        <header className='dark:shadow-[0_10px_30px_10px_rgba(250,250,250,0.3)]'>
            <nav className='flex flex-wrap items-center px-3 bg-[#3FA4B0] dark:bg-[#213c3f] '>
                <Link className='inline-flex items-center px-2 mr-4' href='/'>
                    <Image
                        src="/assets/logo2.png"
                        width={70}
                        height={50}
                        alt="cookie logo"
                    >
                    </Image>

                    <span className='px-3 py-2 ml-5 text-xl tracking-wide text-black uppercase rounded fonr-bold font-bold- hover:bg-cyan-700 hover:text-white dark:text-[#d6dcdd]'>Cookie Stand Admin</span>
                </Link>
                <section className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                    <section className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                        <Link className='items-center justify-center w-full px-3 py-2 text-black rounded font-bold- lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white dark:text-[#d6dcdd]' href='/'>Home</Link>
                        <Link className='items-center justify-center w-full px-3 py-2 text-black rounded font-bold- lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white dark:text-[#d6dcdd]' href='/about'>About Us</Link>
                        <Link className='items-center justify-center w-full px-3 py-2 text-black rounded font-bold- lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white dark:text-[#d6dcdd]' href='/contactUs'>Contact Us</Link>
                        {/* <button
                            type="button"
                            className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white rounded"
                            onClick={toggleThemeHandler}
                        >Toggel Theme</button> */}

                        <center>
                            <input type="checkbox" id="switch"
                                class="checkbox" />
                            <label for="switch" class="toggle" onClick={toggleThemeHandler} >


                                <p className='flex '>
                                    <Icon icon="material-symbols:clear-night" width="40" />

                                    <Icon icon="noto-v1:sun-with-face" width="40" />

                                </p>


                            </label>
                        </center>


                    </section>
                </section>
            </nav>
        </header>
    )
}

