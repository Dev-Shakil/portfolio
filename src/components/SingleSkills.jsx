import Image from 'next/image'
import React from 'react'

const SingleSkills = ({skill}) => {
  return (
    <div className="p-5 cursor-pointer flex justify-center items-center flex-col w-fit h-fit">
    <Image src={skill.url} width={150} height={150} alt="breakfast" className="card-image h-[150px] w-[150px] rounded-full border-4 p-3 border-yellow-600  flex justify-center items-center"/> 
    <span className="pt-2 font-bold text-lg">{skill.name}</span>
    </div>
  )
}

export default SingleSkills