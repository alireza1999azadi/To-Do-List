import React from 'react'
import Button from './Button'

export default function ProjectsSidebar({
  oSAP,
  projects,
  onSelectProject,
  selectedProjectId 
}) {

  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl h-screen'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div>
        <Button onClick={oSAP} >+ Add Project</Button>
      </div>

      <ul className='mt-7'>
        {
          projects.map((item) => {
            let cssClasses = 'w-full text-left px-2 py-1 my-1 rounded-sm hover:text-stone-200 hover:bg-stone-800'

            if (projects.id === selectedProjectId) {
              cssClasses += ' bg-stone-800 text-stone-200'
            } else {
              cssClasses += ' text-stone-400'
            }

            return (
              <li key={item.id}>
                <button
                className={cssClasses}
                  onClick={()=>onSelectProject(item.id)}
                >{item.title}
                </button>
              </li>
            )
          })
        }

      </ul>
    </aside>
  )
}
