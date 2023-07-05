import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card2 from './Card2';
import Card2Skeleton from './Card2Skeleton';
import Heading from './Heading';
const base64 = require('js-base64').Base64;

function WorksSection({githubName}) {
    alert(githubName)
    const [active, setActive] = useState(0);
    const [repos, setRepos] = useState([]);
    const [pagination, setPagination] = useState({});

    const getGithubRepos = async () => {
        try {
            const { data } = await axios.get('https://api.github.com/users/{githubName}/repos', {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
            });

            const filteredData = data.filter((repo) => /_/g.test(repo.name));
            await Promise.all(
                filteredData.map(async (repo) => {
                    const repoReadme = await fetchRepoReadme(repo.full_name);
                    repo.readme = repoReadme;
                    const match = repo.readme.split('\n')[0].match(/<!--\s*'(.*)'\s*-->/);

                    if (match) {
                        const jsonData = JSON.parse(match[1].replace(/\\(.)/g, '$1'));
                        repo.hiddenData = jsonData;
                    }
                })
            );

            setRepos(filteredData);
            // console.log(filteredData);
            setPagination({
                itemsPerPage: 6,
                activePage: 1,
                totalPages: Math.ceil(filteredData.length / 6),
            });
        } catch (error) {
            console.error(`Failed to fetch repos:`, error);
        }
    };

    const fetchRepoReadme = async (repoFullName) => {
        try {
            const readmeRes = await axios.get(`https://api.github.com/repos/${repoFullName}/readme`);
            const readmeContent = base64.decode(readmeRes.data.content);
            return readmeContent;
        } catch (error) {
            console.error(`Failed to fetch readme for ${repoFullName}:`, error);
            return '';
        }
    };

    useEffect(() => {
        if(githubName){
            getGithubRepos();
        }
    }, [githubName]);

    const handlePageChange = (page) => {
        setPagination((prevState) => ({
            ...prevState,
            activePage: page,
        }));
    };

    const indexOfLastRepo = pagination.activePage * pagination.itemsPerPage;
    const indexOfFirstRepo = indexOfLastRepo - pagination.itemsPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    return (
        <div className="container mx-auto pt-24 px-3" id="works">
            <div className="px-5 md:px-4">
                <Heading text="Works" />
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-4 mt-20 mb-8">
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 0 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                >
                    All
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 1 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                >
                    Frontend
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 2 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                >
                    Backend
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 3 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                >
                    Fullstack
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 4 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                >
                    API
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-8 md:gap-6 gap-4 mb-8">
                {currentRepos.length === 0 ? (
                    Array.from({ length: 6 }).map((_, index) => <Card2Skeleton key={index} />)
                ) : (
                    currentRepos.map((repo) => <Card2 repo={repo} key={repo.id} />)
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
        </div>
    );
}

export default WorksSection;
