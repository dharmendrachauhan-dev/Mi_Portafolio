import React from 'react'
import SkillCard from './SkillCard.jsx'

function DevelopmentToolkit() {
    return (
        <div className="h-1/2 px-4 sm:px-12 lg:px-24 xl:px-65">
            <div className='my-3.5 dark:bg-zinc-900/50'>
                <span className="px-4 py-1.5 border bg-yellow-500 dark:border-white dark:text-white rounded-full text-xs font-medium tracking-wide text-zinc-800 dark:bg-zinc-900/50">
                    Skills
                </span>
            </div>
            <SkillCard />
        </div>
    )
}

export default DevelopmentToolkit
