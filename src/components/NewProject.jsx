import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'
export default function NewProject({onAdd,onClose}) {

  const modal=useRef()

  const title=useRef()
  const description=useRef()
  const dueDate=useRef()

  function handleClick(){
    const titleRef=title.current.value
    const descriptionRef=description.current.value
    const dueDateRef=dueDate.current.value

    if(titleRef ===''|| descriptionRef==='' ||dueDateRef===''){
      //handleError
      modal.current.open()
      return
    }

    onAdd({
      title:titleRef,
      description:descriptionRef,
      dueDate:dueDateRef,
    })
  }


  return (
    <>
    <Modal ref={modal} buttonCaption="okey" >
      <h2 className='text-xl font-bold text-stone700 my-4'>Invalid data</h2>  
      <p className='text-stone-600 mb-4'>...ops</p>
      <p className='text-stone-600 mb-4'>please enter valid data</p>
    </Modal> 
    <div className='w-[35rem] mt-16 '>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button onClick={onClose} className='text-stone-800 hover:text-stone-950'>Cancel</button>
        </li>
        <li>
          <button onClick={handleClick} className=' px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950  ' >Save</button>
        </li>

      </menu>
      <div className=''>
        <Input type="text" ref={title} label='TITLE' />
        <Input ref={description} label='DESCRIPTION' textarea />
        <Input type="date" ref={dueDate} label='DUE DATE' />
      </div>
    </div>
    </>
  )
}
