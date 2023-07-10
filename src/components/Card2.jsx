import React, { useState, useEffect } from 'react';

const placeholder = <svg viewBox="0 0 255 158" fill="none">
<rect className='w-full h-full fill-base-300'/>
<path fillRule="evenodd" clipRule="evenodd" d="M208.932 56.3169C219.202 56.3169 227.528 48.0008 227.528 37.7424C227.528 27.484 219.202 19.168 208.932 19.168C198.662 19.168 190.336 27.484 190.336 37.7424C190.336 48.0008 198.662 56.3169 208.932 56.3169Z" className='fill-base-100'/>
<path fillRule="evenodd" clipRule="evenodd" d="M94.842 77.8672L8 157.774H166.203L94.842 77.8672Z" className='fill-base-content/10'/>
<path fillRule="evenodd" clipRule="evenodd" d="M157.658 61.1133L66.498 158.001H245.953L157.658 61.1133Z" className='fill-base-200'/>
</svg>
function Card2({ repo }) {
    // const [image, setImage] = useState(null);
    // useEffect(() => {
    //     let currentIndex = 0;
    //     const interval = setInterval(() => {
    //         if (repo?.hiddenData?.snapshots?.length > 0) {
    //             setImage(repo.hiddenData.snapshots[currentIndex]);
    //             currentIndex = (currentIndex + 1) % repo.hiddenData.snapshots.length;
    //         }
    //     }, 2000);

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, [repo]);
    return (
        <div className="card group bg-base-200 overflow-hidden shadow-md min-h-[204px]" onClick={() => { console.log(repo.hiddenData); }}>
            <div className="flex flex-row">
                {/* <img
                    className="bg-base-300 max-h-20 h-full aspect-square"
                    src={repo.owner.avatar_url}
                    alt="Album"
                /> */}
                <div className="card-body p-3 bg-base-300 text-base-content group-hover:bg-primary/80 group-hover:text-primary-content duration-300">
                    <h2 className="card-title line-clamp-2 leading-snug">
                        {repo.name.split('_').join(' ')}
                    </h2>
                </div>
            </div>
            <div className="carousel w-full mb-2 relative">
                {repo?.hiddenData?.snapshots[0] &&
                    <img src={repo?.hiddenData?.snapshots[0]} alt='snapshot1' className="w-full" />
                }
                {!repo?.hiddenData?.snapshots[0] &&
                    placeholder
                }

                <div className="absolute h-full w-full backdrop-blur-sm bg-base-300/90 invisible group-hover:visible transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="px-4 mb-2 text-base-content font-medium py-3 transition-transform duration-300 ease-in-out translate-y-16 group-hover:translate-y-0">
                        {repo.description}
                    </p>
                </div>

            </div>


            <div className="flex gap-1 flex-wrap px-4 mt-auto mb-3">
                {repo.hiddenData?.tech?.map((tech) => (
                    <div className=" drop-shadow badge badge-base-content badge-outline cursor-default" key={tech}>{tech}</div>
                ))}
            </div>
            <div className="flex justify-between">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn rounded-s-none rounded-tr-lg rounded-br-none rounded-e-lg btn-xs text-base-content bg-base-300 hover:!bg-primary group-hover:bg-primary/80 group-hover:text-primary-content hover:text-primary-content border-0"
                >
                    visit repo
                </a>
                {repo.homepage && (
                    <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="btn rounded-e-none rounded-tl-lg rounded-bl-none rounded-s-lg btn-xs text-base-content bg-base-300 hover:!bg-primary group-hover:bg-primary/80 group-hover:text-primary-content hover:text-primary-content border-0"
                    >
                        View project
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card2;
