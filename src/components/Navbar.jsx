"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [resp,setResp] = useState(false);
    const [navbar, setNavbar] = useState(false)
      //navbar scroll changeBackground function
  const changeBackground = () => {
    
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
   
        
<nav className={`${navbar? " bg-gray-700 text-gray-900 shadow-md shadow-pink-50":"bg-gray-900 text-white"}` + "text-white border-gray-200 bg-[#0c0f1d] dark:border-gray-700 sticky top-0 z-50"}>
  <div className="max-w-screen-xl flex flex-wrap items-center text-black justify-between mx-auto p-4">
  <div className="font-bold text-xl md:text-2xl text-[#2d2e32] ">
          <Link href="/" className={`${navbar? "  text-primary":" text-white"}`}>shakil.dev</Link>
        </div>
    <button data-collapse-toggle="navbar-multi-level" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm  transition duration-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 ${navbar? "  text-primary":" text-white"} `} aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        {!resp? <svg className="w-6 h-6" onClick={()=>setResp(!resp)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>:<FaTimes className="w-6 h-6" onClick={()=>setResp(!resp)} />}
       
    </button>
    <div className={`md:block w-full md:w-auto ${resp ? 'block' : 'hidden'}`} id="navbar-multi-level transition-all duration-400 delay-300">
      

      <div className={`${navbar? "  text-primary":" text-white"} flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 text-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  transition-all duration-400 delay-300 gap-y-3`}>
          <Link href="/" className="font-bold text-lg hover:text-blue-500">Home</Link>
          <Link href="/#skills" className="font-bold text-lg hover:text-blue-500">Skills</Link>
          <Link href="/#about" className="font-bold text-lg hover:text-blue-500">About</Link>
          <Link href="/#projects" className="font-bold text-lg hover:text-blue-500">Projects</Link>
          <Link href="/#contact" className="font-bold text-lg hover:text-blue-500">Contact</Link>
        </div>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar