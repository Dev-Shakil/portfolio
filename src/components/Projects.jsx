import projects from '@/utils/projects'
import React from 'react'
import SingleProject from './SingleProject'

const Projects = () => {
  return (
    <div className="md:flex justify-around w-[90%] md:w-[95%] lg:w-[80%] mx-auto flex-col " id="projects">
      <div className="flex flex-col gap-y-4 py-10">
        <h2 className="font-extrabold text-blue-700 text-lg">PORTFOLIO</h2>
        <p className="font-bold text-2xl text-[#2d2e32]">Each project is a unique piece of development 🧩</p>
      </div>
      <div className="flex flex-col">
        {
          projects.map((project) => {
            return (
              <>
                 <SingleProject  project={project}/>
              </>
             
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects