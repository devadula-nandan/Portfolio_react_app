import React, { useEffect, useState } from 'react';
import Card2 from './Card2';
import axios from 'axios';
import Card2Skeleton from './Card2Skeleton';

function Github() {
    const [repos, setRepos] = useState([]);
    const [pagination, setPagination] = useState({});

    const getLanguages = async (repo) => {
        const response = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`);
        return {
            ...repo,
            languages: response.data
        };
    };

    const getGithubRepos = async () => {
        const res = await axios.get('https://api.github.com/users/devadula-nandan/repos');
        const data = res.data.filter(repo => repo.stargazers_count > 0);

        const promises = data.map(repo => getLanguages(repo));
        const updatedRepos = await Promise.all(promises);

        setRepos(updatedRepos);
        setPagination({
            itemsPerPage: 6,
            activePage: 1,
            totalPages: Math.ceil(updatedRepos.length / 6),
        });
    };

    useEffect(() => {
        getGithubRepos();
    }, []);

    const handlePageChange = (page) => {
        setPagination(prevState => ({
            ...prevState,
            activePage: page,
        }));
    };

    const indexOfLastRepo = pagination.activePage * pagination.itemsPerPage;
    const indexOfFirstRepo = indexOfLastRepo - pagination.itemsPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
    // const currentRepos = []
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-8 md:gap-6 gap-4 mb-8">
                {currentRepos.map(repo => (
                    <Card2 repo={repo} key={repo.id} />
                ))}
                {currentRepos.length === 0 && (
                    <>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Card2Skeleton key={index} />
                        ))}
                    </>
                )}

            </div>
            <div className="flex justify-end my-4">
                <ul className="flex items-center">
                    {Array.from({ length: pagination.totalPages }).map((_, index) => (
                        <li key={index}>
                            <button
                                className={`${pagination.activePage === index + 1 ? 'bg-accent/40 text-accent-content' : 'text-base-content'
                                    } hover:bg-accent/40 hover:text-accent-content transition-all font-semibold rounded-md px-4 py-2 mx-1`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Github;
