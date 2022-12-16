import React from 'react'
import ProgressBar from './ProgressBar'

const ProjectCard = () => {
  return (
    <div className='shadow-md rounded-lg  w-full h-full bg-white cursor-pointer'>
        <div className='h-2/5 bg-primary rounded-t-lg'></div>
        <div className='h-3/5 p-2 flex flex-col gap-3'>
            <h1 className='font-semibold text-secondary'>Project</h1>
            <p className='text-xs font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aspernatur distinctio architecto amet sequi</p>
            <ProgressBar percentage={40}></ProgressBar>
            <div className='flex flex-row justify-between'>
                <div className='text-xs font-medium text-secondary'>TARGET</div>
                <div className='text-xs font-medium text-secondary'> 43,534$</div>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectCard