import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa';
import {BsGithub } from 'react-icons/bs';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="bg-[#f9f9f9] w-[100%] h-fit md:h-[80vh] md:py-2 py-10 flex justify-center flex-col">
    <div className="md:flex justify-around md:items-center md:h-[70vh]  w-[90%] md:max-w-[900px] lg:max-w-[1100px] mx-auto items-end">
        <div className="hero_text lg:w-[65%] md:w-[55%] w-[100%] min-h-[30vh] md:h-fit flex md:block flex-col justify-center items-center px-8 ">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center md:text-start md:leading- leading-normal text-[#2d2e32]">Front-End React Developer</h2>
            <p className="md:w-[450px] w-[100%] md:text-start text-center mt-4 text-lg text-[#555] font-medium ">Hi, Im <span className="font-semibold">Mohammed Shakil.</span> A passionate <span className="font-semibold">Front-end React Developer</span> based in Dhaka, Bangladesh. 📍</p>
            {/* <button className="py-3 px-6 font-semibold border-black border-2">Resume</button> */}
            <div className="flex mt-4 gap-4 text-[#555] items-center">
            <Link href="/resume.pdf" target="_blank" className="py-3 px-6 font-semibold border-black border-2 hover:bg-black hover:text-white rounded-lg duration-500">Resume</Link>
                <Link href="https://www.linkedin.com/in/mohammed-shakil1007" target="_blank"><FaLinkedin className="hover:text-blue-600 text-4xl" /></Link><Link href="https://github.com/Dev-Shakil" target="_blank"><BsGithub className="text-4xl hover:text-black" /></Link></div>
        </div>
        <div className="hero_img md:w-[45%]  lg:w-[35%]  flex justify-center md:items-start  py-7 md:py-0"><Image src="/profile.png" alt='Profile Picter' className="animate" width={350} height={350} /></div>
    </div>
   
    </div>
  )
}

export default Hero