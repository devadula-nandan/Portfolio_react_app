import React from 'react'
import Heading from './Heading'
import emailjs from '@emailjs/browser';

function ContactSection() {
    const form = React.useRef();
    const [mailStatus, setMailStatus] = React.useState([""]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setMailStatus(['success', 'Mail sent successfully']);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    setMailStatus(['error', 'An error occurred while sending the mail']);
                }
            );
    };

    return (
        <div className="container mx-auto pt-24 px-3" id="contact">
            <div className="px-5 md:px-4">
                <Heading text="Contact" />
            </div>
            <div className="flex flex-col w-full lg:flex-row gap-6 md:gap-8 mt-20 justify-between">
                <div className="rounded-box flex max-w-4xl gap-4 flex-col mt-6 lg:m-auto">
                    <h2 className="text-2xl font-bold">Let's talk about everything!</h2>
                    <p className="text-base font-semibold">
                        Don't like forms? Send me an{' '}
                        <a
                            className="text-primary hover:text-base-content transition-all"
                            href="mailto:devadula.nandan@gmail.com"
                        >
                            email
                        </a>
                        . 👋
                    </p>
                </div>
                <div className="rounded-box py-8 xl:py-10 max-w-2xl w-full">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex gap-6 flex-col sm:flex-row">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your name"
                                    className="bg-base-200 input-primary text-primary font-semibold text-base input-md xl:text-lg xl:input-lg input input-bordered w-full"
                                />
                                <input
                                    type='email'
                                    name="user_email"
                                    placeholder="Your email"
                                    className="bg-base-200 input-primary text-primary font-semibold text-base input-md xl:text-lg xl:input-lg input input-bordered w-full"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="bg-base-200 input-primary text-primary font-semibold text-base input-md xl:text-lg xl:input-lg input input-bordered w-full"
                            />
                            <textarea
                                name="message"
                                className="textarea textarea-primary bg-base-200 text-primary font-semibold text-base textarea-md xl:text-lg xl:textarea-lg input input-bordered w-full h-20"
                                placeholder="Message"
                            ></textarea>
                        </div>

                        <button className="btn btn-accent text-accent-content" disabled={mailStatus[0] === "success"}>{mailStatus[0] !== '' ? mailStatus[1] : "send message"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
