import projects from '@/utils/projects'
import React from 'react'
import SingleProject from './SingleProject'

const Projects = () => {
  return (
    <div className="bg-gray-900 py-5">
    <div className="md:flex justify-around w-[90%] md:w-[95%] lg:w-[80%] mx-auto flex-col" id="projects">
      <div className="flex flex-col gap-y-4 py-10">
        <h2 className="font-extrabold text-primary text-center text-4xl">PORTFOLIO</h2>
        <p className="font-bold text-2xl text-[#eff1f8] text-center">Each project is a unique piece of development 🧩</p>
      </div>
      <div className="flex flex-col">
        {
          projects.map((project,ind) => {
            return (
              <>
                 <SingleProject key={ind}  project={project}/>
              </>
             
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default Projects