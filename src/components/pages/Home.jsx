import React from 'react'
import Parallax from '../Parallax'
import AnimateTyping from '../AnimateTyping'

function Home() {
    return (
        <div className="bg-base-100 scroll-smooth">
            <Parallax>
                <div className='h-screen relative container mx-auto' id='home'>
                    <div className="absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center">
                            <img className="shadow-md mb-8 h-28 w-28 rounded-full" src="https://bolby-react.vercel.app/images/avatar-1.svg" alt="" />
                            <button className="mb-3 transition-all duration-500 hover:text-secondary normal-case text-3xl md:text-3xl lg:text-4xl xl:text-5xl  font-extrabold text-primary font-['Righteous'] group">Nandan <span className="text-accent transition-all duration-500 group-hover:text-primary ">Devadula</span></button>
                            <AnimateTyping arr={["Web Developer", "Frontend Developer"]} />
                            <div className="flex gap-1 mb-3">
                                <button className='btn btn-ghost p-2 min-h-0 h-auto'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </button>
                                <button className='btn btn-ghost p-2 min-h-0 h-auto'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </button>
                                <button className='btn btn-ghost p-2 min-h-0 h-auto'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </button>
                                <button className='btn btn-ghost p-2 min-h-0 h-auto'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </button>
                                <button className='btn btn-ghost p-2 min-h-0 h-auto'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </button>
                            </div>
                            <button className="btn btn-accent text-accent-content">HIRE ME</button>
                        </div>
                    </div>
                    <div className="absolute w-full bottom-0 left-1/2 -translate-y-1/3 -translate-x-1/2 flex justify-center">
                        <a className='p-3 rounded group transition-all' href='#about'>
                            <p className='transition-all group-hover:text-primary font-semibold text-base-content mb-3'>scroll down</p>
                            <div className="transition-all group-hover:border-secondary rounded-full w-5 mx-auto h-8 border-2 border-base-content flex justify-center items-center">
                                <div className="h-1 transition-all group-hover:bg-accent w-1 bg-base-content animate-bounce1"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </Parallax>
            <div className='container mx-auto pt-24'>
                <div className=' px-8 md:px-4'>
                    <h1 id="about" className="relative z-10 transition-all normal-case text-3xl md:text-3xl lg:text-4xl xl:text-4xl  font-extrabold text-base-content font-['Righteous'] group-hover:text-accent-content">
                        <span className=''>About Me</span>
                        <svg className='absolute -left-4 -top-2 opacity-60 text-accent -z-10' width="37px" height="37px" viewBox="0 0 37 37">
                            <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                                <g transform="translate(-261.000000, -990.000000)" fill="currentColor">
                                    <g transform="translate(261.000000, 990.000000)">
                                        <g id="section-title">
                                            <g id="dots-bg">
                                                <rect id="Rectangle" x="0" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy" x="11" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-2" x="22" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-3" x="33" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-7" x="0" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-6" x="11" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-5" x="22" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-4" x="33" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-15" x="0" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-14" x="11" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-13" x="22" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-12" x="33" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-11" x="0" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-10" x="11" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-9" x="22" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-8" x="33" y="33" width="4" height="4" rx="2" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 mt-20 px-3'>
                    <div className="person col-span-3">
                        <img className="shadow-md max-w-[16rem] mx-auto md:mx-0 mb-8 w-3/4 rounded-full" src="https://bolby-react.vercel.app/images/avatar-1.svg" alt="" />
                    </div>
                    <div className="col-span-9 drop-shadow-md relative">
                        <div className='h-8 w-8 rotate-45 mx-auto -mb-4 bg-base-300 block md:hidden'></div>
                        <div className='h-8 w-8 rotate-45 -mb-[2.9rem] -ml-[0.9rem] bg-base-300 hidden md:block'></div>
                        <div className='p-7 md:p-8 rounded-box bg-base-300'>
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
            <div className='container mx-auto pt-24'>
                <div className=' px-8 md:px-4'>
                    <h1 id="skills" className="relative z-10 transition-all normal-case text-3xl md:text-3xl lg:text-4xl xl:text-4xl  font-extrabold text-base-content font-['Righteous'] group-hover:text-accent-content">
                        <span className=''>Skills</span>
                        <svg className='absolute -left-4 -top-2 opacity-60 text-accent -z-10' width="37px" height="37px" viewBox="0 0 37 37">
                            <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                                <g transform="translate(-261.000000, -990.000000)" fill="currentColor">
                                    <g transform="translate(261.000000, 990.000000)">
                                        <g id="section-title">
                                            <g id="dots-bg">
                                                <rect id="Rectangle" x="0" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy" x="11" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-2" x="22" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-3" x="33" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-7" x="0" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-6" x="11" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-5" x="22" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-4" x="33" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-15" x="0" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-14" x="11" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-13" x="22" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-12" x="33" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-11" x="0" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-10" x="11" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-9" x="22" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-8" x="33" y="33" width="4" height="4" rx="2" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </h1>
                </div>
                <div className="flex flex-wrap mt-20 gap-6 md:gap-12 px-3 justify-center">
                    <div className="skill flex flex-col items-center gap-2 md:gap-6">
                        <div className="radial-progress font-semibold text-primary" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className='text-secondary'>70%</span></div>
                        <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                    </div>
                    <div className="skill flex flex-col items-center gap-2 md:gap-6">
                        <div className="radial-progress font-semibold text-primary" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className='text-secondary'>70%</span></div>
                        <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                    </div>
                    <div className="skill flex flex-col items-center gap-2 md:gap-6">
                        <div className="radial-progress font-semibold text-primary" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className='text-secondary'>70%</span></div>
                        <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                    </div>
                    <div className="skill flex flex-col items-center gap-2 md:gap-6">
                        <div className="radial-progress font-semibold text-primary" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className='text-secondary'>70%</span></div>
                        <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                    </div>
                    <div className="skill flex flex-col items-center gap-2 md:gap-6">
                        <div className="radial-progress font-semibold text-primary" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className='text-secondary'>70%</span></div>
                        <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                    </div>
                    <div className="skill flex flex-col items-center gap-2 md:gap-6">
                        <div className="radial-progress font-semibold text-primary" style={{ "--value": "70", "--size": "calc(4vw + 4rem)", "--thickness": "calc(0.6vw + 0.6rem)" }}><span className='text-secondary'>70%</span></div>
                        <p className='text-md text-base-content font-semibold md:text-xl lg:text-2xl'>Frontend</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto pt-24'>
                <div className=' px-8 md:px-4'>
                    <h1 id="experience" className="relative z-10 transition-all normal-case text-3xl md:text-3xl lg:text-4xl xl:text-4xl  font-extrabold text-base-content font-['Righteous'] group-hover:text-accent-content">
                        <span className=''>Experience</span>
                        <svg className='absolute -left-4 -top-2 opacity-60 text-accent -z-10' width="37px" height="37px" viewBox="0 0 37 37">
                            <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                                <g transform="translate(-261.000000, -990.000000)" fill="currentColor">
                                    <g transform="translate(261.000000, 990.000000)">
                                        <g id="section-title">
                                            <g id="dots-bg">
                                                <rect id="Rectangle" x="0" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy" x="11" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-2" x="22" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-3" x="33" y="0" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-7" x="0" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-6" x="11" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-5" x="22" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-4" x="33" y="11" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-15" x="0" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-14" x="11" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-13" x="22" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-12" x="33" y="22" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-11" x="0" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-10" x="11" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-9" x="22" y="33" width="4" height="4" rx="2" />
                                                <rect id="Rectangle-Copy-8" x="33" y="33" width="4" height="4" rx="2" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 px-3 mt-20">
                    <div className="col-span-6 bg-base-300 rounded-box px-8 py-10 xl:py-14 relative">
                        <div className="absolute bg-secondary w-1 h-[calc(100%-5.4rem)] xl:h-[calc(100%-7rem)] rounded-full xl:left-[4.5rem] left-[2.4rem]"></div>
                        <div className="xl:pl-20 pl-12 relative mb-5">
                            <div className=''>
                                <div className="absolute left-[-0.6rem] xl:left-6 top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-mortarboard-fill text-primary" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                                    </svg>
                                </div>
                                <span className='text-sm font-semibold text-base-content/60'>2019 - Present</span>
                                <h3 className=' font-bold text-2xl mb-2'>Acamedic Degree</h3>
                                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid possimus quaerat?</p>
                            </div>
                        </div>
                        <div className="xl:pl-20 pl-12 relative mb-5">
                            <div className=''>
                                <div className="absolute left-[-0.6rem] xl:left-6 top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-mortarboard-fill text-primary" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                                    </svg>
                                </div>
                                <span className='text-sm font-semibold text-base-content/60'>2019 - Present</span>
                                <h3 className=' font-bold text-2xl mb-2'>Acamedic Degree</h3>
                                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid possimus quaerat?</p>
                            </div>
                        </div>
                        <div className="xl:pl-20 pl-12 relative mb-5">
                            <div className=''>
                                <div className="absolute left-[-0.6rem] xl:left-6 top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-mortarboard-fill text-primary" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                                    </svg>
                                </div>
                                <span className='text-sm font-semibold text-base-content/60'>2019 - Present</span>
                                <h3 className=' font-bold text-2xl mb-2'>Acamedic Degree</h3>
                                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid possimus quaerat?</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-6 bg-base-300 rounded-box px-8 py-10 xl:py-14 relative">
                        <div className="absolute bg-secondary w-1 h-[calc(100%-5.4rem)] xl:h-[calc(100%-7rem)] rounded-full xl:left-[4.5rem] left-[2.4rem]"></div>
                        <div className="xl:pl-20 pl-12 relative mb-5">
                            <div className=''>
                                <div className="absolute left-[-0.6rem] xl:left-6 top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-briefcase-fill text-primary" viewBox="0 0 16 16">
                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                    </svg>
                                </div>
                                <span className='text-sm font-semibold text-base-content/60'>2019 - Present</span>
                                <h3 className=' font-bold text-2xl mb-2'>Acamedic Degree</h3>
                                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid possimus quaerat?</p>
                            </div>
                        </div>
                        <div className="xl:pl-20 pl-12 relative mb-5">
                            <div className=''>
                                <div className="absolute left-[-0.6rem] xl:left-6 top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-briefcase-fill text-primary" viewBox="0 0 16 16">
                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                    </svg>
                                </div>
                                <span className='text-sm font-semibold text-base-content/60'>2019 - Present</span>
                                <h3 className=' font-bold text-2xl mb-2'>Acamedic Degree</h3>
                                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid possimus quaerat?</p>
                            </div>
                        </div>
                        <div className="xl:pl-20 pl-12 relative mb-5">
                            <div className=''>
                                <div className="absolute left-[-0.6rem] xl:left-6 top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-briefcase-fill text-primary" viewBox="0 0 16 16">
                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                    </svg>
                                </div>
                                <span className='text-sm font-semibold text-base-content/60'>2019 - Present</span>
                                <h3 className=' font-bold text-2xl mb-2'>Acamedic Degree</h3>
                                <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid possimus quaerat?</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home