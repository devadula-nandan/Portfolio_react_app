import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Card2({ repo }) {
    const [languages, setLanguages] = useState({})
    useEffect(() => {
        const getLanguages = async () => {
            const res = await axios.get('https://api.github.com/repos/' + repo.owner.login + '/' + repo.name + '/languages')
            setLanguages(res.data)
        }
        getLanguages()
    }, [])
    return (
        <div className="card lg:card-side bg-base-200 overflow-hidden shadow-xl" onClick={()=>{console.log(repo)}}>
            <img className=' max-h-40 h-full aspect-square' src={repo.owner.avatar_url} alt="Album" />
            <div className="card-body">
                <h2 className="card-title">{repo.name}</h2>
                <p>{repo.description}</p>
                {Object.keys(languages).map((lang) => {
                    return <div className="badge badge-primary" key={lang}>{lang}</div>
                })}
                {/* <pre>{JSON.stringify(repo, null, 2)}</pre> */}
                {repo.homepage &&
                    <div className="card-actions justify-end">
                        <a href={repo.homepage} target="_blank" rel="noreferrer" className="btn btn-xs btn-primary">View project</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default Card2