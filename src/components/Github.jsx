import React, { useEffect } from 'react'
import Card2 from './Card2'
import axios from 'axios'
function Github() {
    const [repos, setRepos] = React.useState([])
    const getGithubRepos = async () => {
        const res = await axios.get('https://api.github.com/users/devadula-nandan/repos')
        setRepos(res.data)
    }
    useEffect(() => {
        getGithubRepos()
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-8 md:gap-6 gap-4 mb-8">
            {repos?.map((repo) => {
                if(repo.stargazers_count > 0){
                    return <Card2 repo={repo}/>
                }
            }
            )}
        </div>
    )
}

export default Github