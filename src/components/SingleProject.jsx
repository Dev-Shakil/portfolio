'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";
// import styles from './SingleProject.module.css'; // Import your CSS file

const SingleProject = ({ project }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`bg-gray-800 h-[600px] xs:h-[400px] h-[380px] rounded-xl shadow-black my-4 shadow-xl projectContainer flex flex-col md:flex-row`}
    >
    <div
      ref={containerRef}
      className={`md:m-3 w-full md:w-2/4 shadow-sm shadow-gray-400 h-[95%] overflow-hidden rounded-t-lg md:rounded-lg  ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Image
        className="object-cover rounded-t-lg md:rounded-lg"
        src={project.image}
        alt={project.title}
        width={800}
        height={800}
        style={{
          transform: isHovered ? 'translateY(-80%)' : 'translateY(0%)',
          transition:'transform 5s ease-in-out 0s'
        }}
      />
    </div>
    <div className="py-3 flex  w-full md:w-2/4 md:m-3 justify-center rounded-lg flex-col px-5 gap-y-4 shadow-lg items-center">
      <h2 className="font-bold text-primary text-xl md:text-3xl">{project.title}</h2>
      <p className="md:text-md text-sm text-gray-400 font-semibold">{project.description}</p>
      <div className="flex gap-4 mt-3 md:mt-5 ">
        <Link className="text-lg flex items-center gap-2 px-4 bg-black p-2 text-gray-400  rounded-md" target="_blank" href={project.github_link}>Code <FaGithub /></Link>
        <Link className="text-lg flex items-center gap-2 px-4 bg-primary  p-2 text-gray-700 font-semibold rounded-md" target="_blank" href={project.demo_link}>Live Demo <CgWebsite /></Link>
      </div>
    </div>
    </div>
  );
};

export default SingleProject;

