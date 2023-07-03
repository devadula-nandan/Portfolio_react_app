import React from 'react'

function Card2Skeleton() {
    return (
        <div className="card bg-base-200 overflow-hidden shadow-md animate-pulse min-h-[204px]">
            <div className=' flex flex-row mb-2'>
            <div className="rounded-full bg-base-300 h-10 w-10 p-8 m-2"></div>
                <div className="card-body p-3 bg-base-300">
                <div className="h-6 bg-base-100 animate-pulse w-1/2 rounded-full"></div>
                <div className="h-6 bg-base-100 animate-pulse w-3/4 rounded-full"></div>



                    {/* <pre>{JSON.stringify(repo, null, 2)}</pre> */}

                </div>
            </div>
            <div className="h-5 bg-base-300 animate-pulse w-3/4 rounded-full mx-4 mb-3"></div>
            <div className="h-5 bg-base-300 animate-pulse w-1/2 rounded-full mx-4 mb-2"></div>

            <div className="flex gap-x-1 flex-wrap px-4 mt-auto mb-3">

                    <div className=' flex flex-wrap gap-1'>
                        <div className="h-5 bg-base-300 animate-pulse w-16 rounded-full"></div>
                        <div className="h-5 bg-base-300 animate-pulse w-12 rounded-full"></div>
                        <div className="h-5 bg-base-300 animate-pulse w-20 rounded-full"></div>
                    </div>
            </div>
            {/* {repo.stargazers_count} */}
            <div className="flex justify-between">
                <a  target="_blank" rel="noreferrer" className="btn rounded-s-none rounded-tr-lg rounded-br-none w-20 rounded-e-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0"></a>
                

                    <a  target="_blank" rel="noreferrer" className="btn rounded-e-none rounded-tl-lg rounded-bl-none w-20 rounded-s-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0"></a>

                
            </div>
        </div>
    )
}

export default Card2Skeleton