import React from 'react'
const placeholder = <svg viewBox="0 0 255 158" fill="none">
    <rect className='w-full h-full fill-base-300' />
    <path fillRule="evenodd" clipRule="evenodd" d="M208.932 56.3169C219.202 56.3169 227.528 48.0008 227.528 37.7424C227.528 27.484 219.202 19.168 208.932 19.168C198.662 19.168 190.336 27.484 190.336 37.7424C190.336 48.0008 198.662 56.3169 208.932 56.3169Z" className='fill-base-100' />
    <path fillRule="evenodd" clipRule="evenodd" d="M94.842 77.8672L8 157.774H166.203L94.842 77.8672Z" className='fill-base-content/10' />
    <path fillRule="evenodd" clipRule="evenodd" d="M157.658 61.1133L66.498 158.001H245.953L157.658 61.1133Z" className='fill-base-200' />
</svg>
function Card2Skeleton() {
    return (
        <div className="card bg-base-200 overflow-hidden shadow-md animate-pulse min-h-[204px]">
            <div className=' flex flex-row'>
                <div className="rounded-full bg-base-300 h-10 w-10 p-8 m-2"></div>
                <div className="card-body p-3 bg-base-300">
                    <div className="h-6 bg-base-100 animate-pulse w-1/2 rounded-full"></div>
                    <div className="h-6 bg-base-100 animate-pulse w-3/4 rounded-full"></div>
                </div>
            </div>
            {placeholder}
            <div className="h-5 bg-base-300 animate-pulse w-3/4 rounded-full mx-4 mb-3 mt-2"></div>
            {/* <div className="h-5 bg-base-300 animate-pulse w-1/2 rounded-full mx-4 mb-2"></div> */}
            <div className="flex gap-x-1 flex-wrap px-4 mt-auto mb-3">
                <div className=' flex flex-wrap gap-1'>
                    <div className="h-5 bg-base-300 animate-pulse w-16 rounded-full"></div>
                    <div className="h-5 bg-base-300 animate-pulse w-12 rounded-full"></div>
                    <div className="h-5 bg-base-300 animate-pulse w-20 rounded-full"></div>
                </div>
            </div>
            {/* {repo.stargazers_count} */}
            <div className="flex justify-between">
                <a target="_blank" rel="noreferrer" className="btn rounded-s-none rounded-tr-lg rounded-br-none w-20 rounded-e-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0"></a>
                <a target="_blank" rel="noreferrer" className="btn rounded-e-none rounded-tl-lg rounded-bl-none w-20 rounded-s-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0"></a>
            </div>
        </div>
    )
}

export default Card2Skeleton