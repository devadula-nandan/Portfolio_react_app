import React, { useState, useEffect } from 'react'
import axios from 'axios'

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function Card2({ repo }) {

    return (
        <div className="card bg-base-200 overflow-hidden shadow-md" onClick={() => { console.log(repo) }}>
            <div className=' flex flex-row mb-2'>
                <img className=' bg-base-300 max-h-20 h-full aspect-square' src={repo.owner.avatar_url} alt="Album" />
                <div className="card-body p-3 bg-base-300">
                    <h2 className="card-title line-clamp-2 text-base-content leading-snug">{repo.name.split('-').join(' ')}</h2>



                    {/* <pre>{JSON.stringify(repo, null, 2)}</pre> */}

                </div>
            </div>
            <p className='line-clamp-2 px-4 mb-2 text-base-content/80 font-medium'>{repo.description}</p>
            <div className="flex gap-x-1 flex-wrap px-4 mt-auto mb-3">
                {Object.keys(repo.languages).map((lang) => {
                    return (
                        <div key={lang} className="tooltip" data-tip={repo.languages[lang] + " Bytes"}>
                            <div className=" drop-shadow badge badge-base-content badge-outline cursor-default" key={lang}>{lang}</div>
                        </div>
                    )
                })}
                {isEmpty(repo.languages) &&
                    <div className=' flex flex-wrap gap-1'>
                        <div class="h-6 bg-base-300 animate-pulse w-16 rounded-full"></div>
                        <div class="h-6 bg-base-300 animate-pulse w-12 rounded-full"></div>
                        <div class="h-6 bg-base-300 animate-pulse w-20 rounded-full"></div>
                    </div>}
            </div>
            {/* {repo.stargazers_count} */}
            <div className="flex justify-between">
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn rounded-s-none rounded-tr-lg rounded-br-none rounded-e-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0">visit repo</a>
                {repo.homepage &&

                    <a href={repo.homepage} target="_blank" rel="noreferrer" className="btn rounded-e-none rounded-tl-lg rounded-bl-none rounded-s-lg btn-xs btn-primary bg-primary/80 text-primary-content hover:text-primary-content border-0">View project</a>

                }
            </div>
        </div>
    )
}

export default Card2