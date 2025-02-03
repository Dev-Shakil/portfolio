import Image from 'next/image'
import React from 'react'

const SingleSkills = ({skill}) => {
  return (
    <div className={`p-5 cursor-pointer flex justify-center items-center flex-col w-fit h-fit border-primary rounded-lg border hover:bg-gray-50 hover:duration-500 hover:scale-105 transition ease-in-out hover:bg-${skill?.bg}`}>
    <Image src={skill.url} width={250} height={250} alt="breakfast" className="card-image h-[150px] w-[150px] rounded-full border object-contain border-yellow-600  flex justify-center items-center"/> 
    <span className="pt-2 font-bold text-primary text-lg">{skill.name}</span>
    </div>
  )
}

export default SingleSkills