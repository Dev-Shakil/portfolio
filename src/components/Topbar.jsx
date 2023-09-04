"use client"


import Link from 'next/link'
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import {GiHamburgerMenu} from "react-icons/gi"
import {FaTimes} from "react-icons/fa"
 
// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ['latin'],weight:'500' })

const Topbar = () => {
  const [active, setActive] = useState(true)
 
  return (
    <div className={`${poppins.className} py-4 px-10 h-[80px] shadow-xl flex justify-between items-center `}>
        <div className="font-bold text-lg md:text-xl text-[#2d2e32] ">
          <Link href="/" className="">shakil.dev</Link>
        </div>
        <div className={`gap-6 text-lg text-[#2d2e32] font-medium md:flex md:items-center absolute md:static md:pb-0 pb-12  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 flex-col md:flex-row transition-all duration-500 ease-in ${!active? 'shadow-xl md:shadow-none flex top-[100px] opacity-100':'top-[-590px]'} md:opacity-100 opacity-0`}>
          <Link href="/" className="font-semibold hover:text-blue-500">Home</Link>
          <Link href="/about" className="font-semibold hover:text-blue-500">About</Link>
          <Link href="/portfolio" className="font-semibold hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="font-semibold hover:text-blue-500">Contact</Link>
        </div>
        <button className="block md:hidden cursor-pointer text-2xl" >
          {active?<GiHamburgerMenu className="text-green-800" onClick={()=>{setActive(!active)}}/>
          :<FaTimes onClick={()=>{setActive(!active)}} className="text-red-800" />}
        </button>
    </div>
  )
}

export default Topbar