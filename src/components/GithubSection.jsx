import React from 'react'
import Github from './Github';
import Heading from './Heading';
function GithubSection() {
    return (
        <div className="container mx-auto pt-24 px-3" id="github">
            <div className="px-5 md:px-4">
                <Heading text="Github" />
            </div>
            <div className=' mt-20 mb-8'>
                <Github />
            </div>
            
        </div>
    )
}

export default GithubSection