'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { IoCloudDownload } from 'react-icons/io5';

const Hero = () => {
  const [tech, setTech] = useState("React.js");

  useEffect(() => {
    const interval = setInterval(() => {
      setTech((prev) => (prev === "React.js" ? "Next.js" : "React.js"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-fit md:h-[90vh] md:py-2 py-10 flex justify-center flex-col bg-[url('/banner-scaled.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="md:flex justify-around md:items-center md:h-[70vh] w-[90%] md:max-w-[900px] lg:max-w-[1100px] mx-auto items-end animate-hero-stagger">
        {/* Text Section */}
        <div className="hero_text lg:w-[65%] md:w-[55%] w-full min-h-[30vh] md:h-fit flex md:block flex-col justify-center items-center px-8">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center md:text-start leading-normal text-[#eceffa] animate-fade-in-up">
            Front-End{' '}
            <span 
              key={tech} 
              className="text-[#55E6A5] transition-all duration-500 ease-in-out animate-fade-scale"
            >
              {tech}
            </span>{' '}
            Developer
          </h2>
          <p className="md:w-[450px] w-full md:text-start text-center mt-4 text-lg text-[#dac5c5] font-medium animate-fade-in-up delay-200">
            Hi, I`m <span className="font-semibold">Mohammed Shakil.</span> A passionate{' '}
            <span className="font-semibold">Front-end {tech} Developer</span> based in Dhaka, Bangladesh. 📍
          </p>
          <div className="flex mt-4 gap-4 text-[#555] items-center animate-fade-in-up delay-400">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="py-4 flex gap-3 items-center justify-center px-4 sm:px-8 font-semibold hover:border-primary hover:border-2 hover:bg-black text-black hover:text-white rounded-sm text-xl duration-250 bg-primary"
            >
              Download Resume <IoCloudDownload className="text-xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohammed-shakil1007" target="_blank">
              <FaLinkedin className="hover:text-blue-600 text-4xl transition-transform text-white duration-500 hover:scale-110" />
            </Link>
            <Link href="https://github.com/Dev-Shakil" target="_blank">
              <BsGithub className="text-4xl hover:text-black transition-transform duration-500 hover:scale-110 text-white" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero_img mx-auto md:mx-0 w-[65%] md:w-[45%] lg:w-[35%] flex justify-center md:items-start py-7 md:py-0 relative">
          <div className="absolute md:hidden 2xl:block mt-4 md:mt-0 xl:w-[500px] xl:h-[500px] lg:w-[400px] overflow-auto lg:h-[400px] md:w-[300px] md:h-[300px] w-[320px] h-[320px] bg-gray-800 rounded-md rotate-45 -z-10"></div>
          <Image
            src="/profile.png"
            alt="Profile Picture"
            className="animate-fade-in-up w-fit border- rounded-full delay-600"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
