import React from 'react'
import Heading from './Heading'

function AboutSection() {
    return (
        <div className='container mx-auto pt-24 px-3' id="about">
            <div className='px-5 md:px-4'>
                <Heading text="About" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 mt-20'>
                <div className="person col-span-3">
                    <img className="shadow-md max-w-[16rem] mx-auto md:mx-0 mb-8 w-3/4 rounded-full bg-primary" src="https://ik.imagekit.io/jagwpg3pn/images/users/profile-image.png?updatedAt=1688202586175" alt="" />
                </div>
                <div className="col-span-9 drop-shadow-md relative">
                    <div className='h-8 w-8 rotate-45 mx-auto -mb-4 bg-base-200 block md:hidden'></div>
                    <div className='h-8 w-8 rotate-45 -mb-[2.9rem] -ml-[0.9rem] bg-base-200 hidden md:block'></div>
                    <div className='p-7 md:p-8 rounded-box bg-base-200'>
                        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-4">
                            <div className="col-span-6">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-acbasecent-content mb-6">Hi, I'm Nandan</h1>
                                <p className='text-base md:text-base lg:text-lg font-semibold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, illo nesciunt asperiores, commodi molestiae voluptates corporis officia laborum quia aliquam excepturi beatae similique repudiandae a esse fuga blanditiis amet distinctio.</p>
                                <button className="btn btn-accent text-accent-content">Download CV</button>
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col gap-4">
                                    <div className="one">
                                        <div className="flex justify-between">
                                            <p className='font-semibold'>Frontend</p>
                                            <p className='font-semibold'>76%</p>
                                        </div>
                                        <progress className="progress progress-primary w-full" value="76" max="100"></progress>
                                    </div>
                                    <div className="two">
                                        <div className="flex justify-between">
                                            <p className='font-semibold'>Backend</p>
                                            <p className='font-semibold'>60%</p>
                                        </div>
                                        <progress className="progress progress-secondary w-full" value="60" max="100"></progress>
                                    </div>
                                    <div className="three">
                                        <div className="flex justify-between">
                                            <p className='font-semibold'>Databases</p>
                                            <p className='font-semibold'>50%</p>
                                        </div>
                                        <progress className="progress progress-accent w-full" value="50" max="100"></progress>
                                    </div>
                                    <div className="four">
                                        <div className="flex justify-between">
                                            <p className='font-semibold'>Cloud/Servers</p>
                                            <p className='font-semibold'>50%</p>
                                        </div>
                                        <progress className="progress progress-primary w-full" value="50" max="100"></progress>
                                    </div>
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