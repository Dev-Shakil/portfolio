import Link from 'next/link'
import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="md:w-[80%] mx-auto flex justify-center md:justify-between items-center w-[95%] flex-wrap py-2 bg-gray-900">
        <h2 className=" text-xl md:text-2xl text-white">Copyright © 2025. All rights are reserved</h2>
        <div className="flex mt-4 gap-4 text-[#555] items-center">
            <Link href="/resume.pdf" target="_blank" className="py-2 px-6 font-semibold border-white text-white border-2 hover:bg-black hover:text-white rounded-lg duration-500">Resume</Link>
                <Link href="https://www.linkedin.com/in/mohammed-shakil1007" target="_blank"><FaLinkedin className="hover:text-blue-600 text-4xl" /></Link><Link href="https://github.com/Dev-Shakil" target="_blank"><BsGithub className="text-4xl hover:text-black" /></Link></div>
    </div>
  )
}

export default Footer