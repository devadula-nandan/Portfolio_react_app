import React, { useState, useEffect } from 'react';


function Card2({ repo }) {
    return (
        <div className="card bg-base-200 overflow-hidden shadow-md min-h-[204px]" onClick={()=>{console.log(repo.hiddenData);}}>
            <div className="flex flex-row mb-2">
                <img
                    className="bg-base-300 max-h-20 h-full aspect-square"
                    src={repo.owner.avatar_url}
                    alt="Album"
                />
                <div className="card-body p-3 bg-base-300">
                    <h2 className="card-title line-clamp-2 text-base-content leading-snug">
                        {repo.name.split('_').join(' ')}
                    </h2>
                </div>
            </div>
            <p className="line-clamp-2 px-4 mb-2 text-base-content/80 font-medium">
                {repo.description}
            </p>
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
                    className="btn rounded-s-none rounded-tr-lg rounded-br-none rounded-e-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0"
                >
                    visit repo
                </a>
                {repo.homepage && (
                    <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="btn rounded-e-none rounded-tl-lg rounded-bl-none rounded-s-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0"
                    >
                        View project
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card2;
