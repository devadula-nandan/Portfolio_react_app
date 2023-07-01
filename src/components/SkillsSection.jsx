import React from 'react'
import Heading from './Heading'

function SkillsSection() {
    return (
        <div className='container mx-auto pt-24 px-3' id="skills">
            <div className='px-5 md:px-4'>
                <Heading text="Skills" />
            </div>
            <div className="flex flex-wrap mt-20 gap-6 md:gap-12 justify-center">
                <div className="skill flex flex-col items-center gap-2 md:gap-6">
                    <div className="radial-progress font-semibold text-primary hover:text-secondary transition-all" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className=' text-base-content'>70%</span></div>
                    <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                </div>
                <div className="skill flex flex-col items-center gap-2 md:gap-6">
                    <div className="radial-progress font-semibold text-primary hover:text-secondary transition-all" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className=' text-base-content'>70%</span></div>
                    <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                </div>
                <div className="skill flex flex-col items-center gap-2 md:gap-6">
                    <div className="radial-progress font-semibold text-primary hover:text-secondary transition-all" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className=' text-base-content'>70%</span></div>
                    <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                </div>
                <div className="skill flex flex-col items-center gap-2 md:gap-6">
                    <div className="radial-progress font-semibold text-primary hover:text-secondary transition-all" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className=' text-base-content'>70%</span></div>
                    <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                </div>
                <div className="skill flex flex-col items-center gap-2 md:gap-6">
                    <div className="radial-progress font-semibold text-primary hover:text-secondary transition-all" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className=' text-base-content'>70%</span></div>
                    <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                </div>
                <div className="skill flex flex-col items-center gap-2 md:gap-6">
                    <div className="radial-progress font-semibold text-primary hover:text-secondary transition-all" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className=' text-base-content'>70%</span></div>
                    <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection