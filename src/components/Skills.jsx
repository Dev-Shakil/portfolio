import Image from 'next/image'
import React from 'react'
import SingleSkills from './SingleSkills';

const Skills = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const Skills=[
        {
            name:"Raact Js",
            url:"/react.png"
        },
        {
            name:"Next Js",
            url:"/nextjs.png"
        },
        {
            name:"Javascript",
            url:"/javascript.png"
        },
        {
            name:"Tailwind CSS",
            url:"/tailwind.png"
        },
        {
            name:"Bootstrap",
            url:"/bootstrap.svg"
        },
        {
          name:"Ant Design",
          url:"/antd.png"
        },
        {
            name:"Redux Tool Kit",
            url:"/redux.webp"
        },
        {
            name:"HTML 5",
            url:"/html.png"
        },
        {
            name:"CSS 3",
            url:"/css.png"
        },
        {
            name:"React Router",
            url:"/react-router.png"
        },
       
      ]
  return (<div className="py-8" id='skills'>
    <h2 className="text-center my-4 text-3xl font-bold tracking-widest text-gray-800">Skills</h2>
    <div className="md:w-[80%] w-[100%] mx-auto justify-center flex flex-wrap gap-7 py-10">
   
        {
            Skills.map((skill ,ind)=>{
                return <div key={ind} className="flex flex-row justify-center items-center">
                   <SingleSkills skill={skill} />
                </div>
            })
        }

    </div></div>
  )
}

export default Skills