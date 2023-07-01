import React from 'react'

function Heading({text}) {
  return (
    <h1 className="relative z-10 transition-all normal-case text-3xl md:text-3xl lg:text-4xl xl:text-4xl  font-extrabold text-base-content font-['Righteous'] group-hover:text-accent-content">
    <span className=''>{text}</span>
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
  )
}

export default Heading