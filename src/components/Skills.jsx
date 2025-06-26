'use client';
import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiAntdesign,
  SiReactrouter,
  SiMui,
  SiSanity,
} from 'react-icons/si';
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
const skills = [
  { name: "React.js", Icon: FaReact, color: "text-blue-500" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500" },
  
  { name: "Bootstrap", Icon: FaBootstrap, color: "text-purple-600" },
  { name: "Ant Design", Icon: SiAntdesign, color: "text-red-500" },
  { name: "Material UI", Icon: SiMui, color: "text-indigo-500" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "text-purple-400" },
  { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-700" },
  { name: "React Router", Icon: SiReactrouter, color: "text-rose-500" },
  { name: "Mongo DB", Icon: BiLogoMongodb, color: "text-green-700" },
  { name: "Postgresql", Icon: BiLogoPostgresql, color: "text-black-700" },
  { name: "Sanity.io", Icon: SiSanity, color: "text-pink-700" },
  // Removed Axios icon since it's not in react-icons
];

const Skills = () => {
  return (
    <section className="py-10 container mx-auto bg-gray-900 " id="skills">
      <h2 className="text-4xl font-bold text-center mb-8 text-primary">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(({ name, Icon, color }, index) => (
          <div
            key={index}
            className="p-4 m-2 w-32 h-32 flex flex-col items-center justify-center border border-primary rounded-lg hover:scale-105 transition-all duration-300 shadow-sm bg-white"
          >
            <Icon className={`text-6xl mb-2 ${color}`} />
            <span className="text-center text-sm font-semibold text-gray-800">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



