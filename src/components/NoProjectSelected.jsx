import React from 'react'
import NoProImage from "../assets/no-projects.png"
import Button from './Button'
export default function NoProjectSelected({oSAP}) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={NoProImage} alt="an empty task list" className='w-16 h-16 mx-auto object-contain' />
        <h2 className='text-xl font-bold text-stone-500 my-4'>
            No project selected
        </h2>
        <p className='text-stone-400 mb-4'>Select a project or start project</p>
        <p className='mt-8'>
        <Button onClick={oSAP} >Create new project</Button>
        </p>
    </div>
  )
}
