

import Image from 'next/image';
import React from 'react';
import SingleSkills from './SingleSkills';

const Skills = () => {
  const skills = [
    { name: "React Js", url: "/react.png", bg: "orange-500" },
    { name: "Next Js", url: "/nextjs.png", bg: "red-500" },
    { name: "Javascript", url: "/javascript.png", bg: "blue-700" },
    { name: "Tailwind CSS", url: "/tailwind.png", bg: "cyan-500" },
    { name: "Bootstrap", url: "/bootstrap.svg", bg: "sky-700" },
    { name: "Ant Design", url: "/antd.png", bg: "orange-500" },
    { name: "Redux Tool Kit", url: "/redux.webp", bg: "violet-500" },
    { name: "HTML 5", url: "/html.png", bg: "fuchsia-500" },
    { name: "CSS 3", url: "/css.png", bg: "pink-600" },
    { name: "React Router", url: "/react-router.png", bg: "rose-600" },
  ];

  return (
    <div className="py-8 bg-gray-900" id="skills">
      <h2 className="text-center my-4 text-4xl font-bold tracking-widest text-primary animate-fade-in-up">
        MY SKILLS
      </h2>
      <div className="md:w-[70%] w-[100%] mx-auto justify-center flex flex-wrap md:gap-7 gap-2 py-10">
        {skills.map((skill, ind) => (
          <div
            key={ind}
            className="flex flex-col justify-center items-center animate-fade-in-up hover:scale-105 transition-transform duration-500"
            style={{ animationDelay: `${ind * 100}ms` }} // Staggered animation
          >
            <SingleSkills skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;