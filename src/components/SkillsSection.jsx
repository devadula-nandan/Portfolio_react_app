import React from 'react'
import Heading from './Heading'

function SkillsSection({ skills }) {
    return (
        <div className='container mx-auto pt-24 px-3' id="skills">
            <div className='px-5 md:px-4'>
                <Heading text="Skills" />
            </div>
            <div className="flex flex-wrap mt-20 gap-6 md:gap-12 justify-center">
                {skills && Object.keys(skills).map((key) => (
                    <div className="skill flex flex-col items-center gap-2 md:gap-6" key={key}>
                        {/* <div className="radial-progress font-semibold text-primary hover:text-secondary transition-all" style={{ "--value": skills[key], "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className=' text-base-content'>{skills[key]}%</span></div> */}
                        <p className='text-md flex text-base-content font-semibold md:text-xl lg:text-2xl gap-1 items-center'><img className=' h-6 w-6' src={`https://skillicons.dev/icons?i=${key.toLowerCase()}`} alt={key}/>{key}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection