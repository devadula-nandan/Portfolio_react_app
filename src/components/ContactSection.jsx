import React from 'react'
import Heading from './Heading'

function ContactSection() {
    return (
        <div className='container mx-auto pt-24 px-3' id="contact">
            <div className='px-5 md:px-4'>
                <Heading text="Contact" />
            </div>
            <div className="flex flex-col w-full lg:flex-row gap-6 md:gap-8 mt-20 justify-between" >
                <div className="rounded-box flex max-w-4xl gap-4 flex-col mt-6 lg:m-auto">
                    <h2 className='text-2xl font-semibold'>Let's talk about everything!</h2>
                    <p className='font-semibold'>Don't like forms? Send me an email. 👋</p>
                </div>
                <div className="rounded-box py-8 xl:py-10 max-w-2xl w-full">
                    <form action="">
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex gap-6 flex-col sm:flex-row">
                                <input type="text" placeholder="Your name" className="bg-base-200 input-primary text-primary font-semibold text-base input-md xl:text-lg xl:input-lg input input-bordered w-full" />
                                <input type="text" placeholder="Your email" className="bg-base-200 input-primary text-primary font-semibold text-base input-md xl:text-lg xl:input-lg input input-bordered w-full" />
                            </div>
                            <input type="text" placeholder="Subject" className="bg-base-200 input-primary text-primary font-semibold text-base input-md xl:text-lg xl:input-lg input input-bordered w-full" />
                            <textarea className="textarea textarea-primary bg-base-200 text-primary font-semibold text-base textarea-md xl:text-lg xl:textarea-lg input input-bordered w-full h-20" placeholder="Message"></textarea>
                        </div>
                        <button className="btn btn-accent text-accent-content">Send Message</button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default ContactSection