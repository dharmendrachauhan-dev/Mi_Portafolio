import React from 'react'
import { Leaf } from 'lucide-react';
function ProjectIcon() {
  return (
    <div className='flex items-center justify-center gap-2 my-3'>
      <div>
        <Leaf size={40} strokeWidth={2.5}/>
      </div>
      <div className='flex flex-col gap-0.5'>
        <h1 className='font-bold text-4xl tracking-wider'>Project</h1>
        <p className='italic text-sm'>A collection of things I've built.</p>
      </div>
    </div>
  )
}

export default ProjectIcon
