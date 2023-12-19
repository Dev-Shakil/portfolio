'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

const About = () => {
  // useEffect(() => {
  //   const text = document.querySelector('.text p');
  //   text.innerHTML = text.innerText
  //     .split('')
  //     .map((char, i) => (
  //       <span key={i} style={{ transform: `rotate(${i * 8.2}deg)` }}>{i}</span>
  //     ))
  //     .join('');
  // }, []);
  return (
    <div className="min-h-[90vh] bg-gray-200 flex justify-center items-center" id="about">
      <div className="flex gap-14  md:flex-nowrap flex-wrap justify-center py-10 px-9">
        <div className="">
        <Image src="/about.webp" alt="about" width={450} height={650} className="rounded-lg min-h-[400px]" />
          {/* <div className="relative w-[200px] h-[200px] rounded-full flex bg-[#ccc] justify-center items-center ">
            <div className="absolute w-[150px] h-[150px] bg-cover bg-aboutPic rounded-full brightness{1.5} contrast{1.5}"></div>
            <div className="text absolute w-[100%] h-[100%]  "><p className=" absolute left-[50%] text-lg   ">Mohammed Shakil - Frontend React JS Developer - </p></div>
          </div> */}
        </div>
        
        <div className="text flex flex-col max-w-[500px] ">
          <h3 className="text-green-700 font-bold text-xl">ABOUT ME</h3>
          <h2 className="font-semibold text-2xl text-gray-700 py-3">A dedicated Front-end Developer
            based in Belgrade, Serbia 📍
          </h2>
    	    <p className="font-medium text-lg text-gray-500" >As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
        </div>
      </div>
    </div>
  )
}

export default About