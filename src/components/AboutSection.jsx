import React from 'react'
import Heading from './Heading'

function AboutSection({ user }) {
    return (
        <div className='container mx-auto pt-24 px-3' id="about">
            <div className='px-5 md:px-4'>
                <Heading text="About" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 mt-20'>
                <div className="person col-span-3">
                    <img className="shadow-md max-w-[16rem] mx-auto md:mx-0 mb-8 w-3/4 rounded-full bg-primary" src={user?.avatar} alt="" />
                </div>
                <div className="col-span-9 drop-shadow-md relative">
                    <div className='h-8 w-8 rotate-45 mx-auto -mb-4 bg-base-200 block md:hidden'></div>
                    <div className='h-8 w-8 rotate-45 -mb-[2.9rem] -ml-[0.9rem] bg-base-200 hidden md:block'></div>
                    <div className='p-7 md:p-8 rounded-box bg-base-200'>
                        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-4">
                            <div className="col-span-6">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-acbasecent-content mb-6">Hi, I'm {user?.firstName}</h1>
                                <p className='text-base md:text-base lg:text-lg font-semibold mb-6'>{user?.description}</p>
                                <a href={user?.cv} target="_blank" rel="noreferrer" className="btn btn-accent text-accent-content">Download CV</a>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col gap-4">
                                    {user && Object.keys(user.commonSkills).map((key) => (
                                        <div className="skill" key={key}>
                                            <div className="flex justify-between">
                                                <p className='font-semibold capitalize'>{key}</p>
                                                <p className='font-semibold'>{user.commonSkills[key]}%</p>
                                            </div>
                                            <progress className="progress progress-primary w-full" value={user.commonSkills[key]} max="100"></progress>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection