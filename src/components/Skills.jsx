// import Image from 'next/image'
// import React from 'react'
// import SingleSkills from './SingleSkills';

// const Skills = () => {
//     // const settings = {
//     //     dots: true,
//     //     infinite: true,
//     //     slidesToShow: 4,
//     //     slidesToScroll: 1,
//     //     autoplay: true,
//     //     speed: 2000,
//     //     autoplaySpeed: 2000,
//     //     responsive: [
//     //         {
//     //           breakpoint: 1024,
//     //           settings: {
//     //             slidesToShow: 3,
//     //             slidesToScroll: 3,
//     //             infinite: true,
//     //             dots: true
//     //           }
//     //         },
//     //         {
//     //           breakpoint: 600,
//     //           settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 2,
//     //             initialSlide: 2
//     //           }
//     //         },
//     //         {
//     //           breakpoint: 480,
//     //           settings: {
//     //             slidesToShow: 1,
//     //             slidesToScroll: 1
//     //           }
//     //         }
//     //       ]
//     //   };
//       const Skills=[
//         {
//             name:"Raact Js",
//             url:"/react.png",
//             bg:"orange-500"
//         },
//         {
//             name:"Next Js",
//             url:"/nextjs.png",
//             bg:"red-500"
//         },
//         {
//             name:"Javascript",
//             url:"/javascript.png",
//             bg:"blue-700"
//         },
//         {
//             name:"Tailwind CSS",
//             url:"/tailwind.png",
//             bg:"cyan-500"
//         },
//         {
//             name:"Bootstrap",
//             url:"/bootstrap.svg",
//             bg:"sky-700"
//         },
//         {
//           name:"Ant Design",
//           url:"/antd.png",
//           bg:"orange-500"
//         },
//         {
//             name:"Redux Tool Kit",
//             url:"/redux.webp",
//             bg:"violet-500"
//         },
//         {
//             name:"HTML 5",
//             url:"/html.png",
//             bg:"fuchsia-500"
//         },
//         {
//             name:"CSS 3",
//             url:"/css.png",
//             bg:"pink-600"
//         },
//         {
//             name:"React Router",
//             url:"/react-router.png",
//             bg:"rose-600"
//         },
       
//       ]
//   return (<div className="py-8" id='skills'>
//     <h2 className="text-center my-4 text-3xl font-bold tracking-widest text-gray-800">Skills</h2>
//     <div className="md:w-[80%] w-[100%] mx-auto justify-center flex flex-wrap gap-7 py-10">
   
//         {
//             Skills.map((skill ,ind)=>{
//                 return <div key={ind} className="flex flex-row justify-center items-center">
//                    <SingleSkills skill={skill} />
//                 </div>
//             })
//         }

//     </div></div>
//   )
// }

// export default Skills

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
    <div className="py-8" id="skills">
      <h2 className="text-center my-4 text-3xl font-bold tracking-widest text-gray-800 animate-fade-in-up">
        Skills
      </h2>
      <div className="md:w-[80%] w-[100%] mx-auto justify-center flex flex-wrap gap-7 py-10">
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