import React, { useState } from 'react';
import Heading from './Heading';
import Card1 from './Card1';
// import Github from './Github';
import works from './works.json';

function WorksSection() {
    const [active, setActive] = useState(0);
    const [filteredWorks, setFilteredWorks] = useState(works);
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const filterWorks = (category) => {
        setActive(category);
        if (category === 0) {
            setFilteredWorks(works);
        } else {
            const filtered = works.filter((work) =>
                work.tags.includes(getTagName(category))
            );
            setFilteredWorks(filtered);
        }
        setCurrentPage(1);
    };

    const getTagName = (category) => {
        switch (category) {
            case 0:
                return '';
            case 1:
                return 'frontend';
            case 2:
                return 'backend';
            case 3:
                return 'fullstack';
            case 4:
                return 'api';
            // case 5:
            //     return 'github';
            default:
                return '';
        }
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredWorks.slice(indexOfFirstCard, indexOfLastCard);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="container mx-auto pt-24 px-3" id="works">
            <div className="px-5 md:px-4">
                <Heading text="Works" />
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-4 mt-20 mb-8">
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 0 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                    onClick={() => filterWorks(0)}
                >
                    All
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 1 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                    onClick={() => filterWorks(1)}
                >
                    Frontend
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 2 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                    onClick={() => filterWorks(2)}
                >
                    Backend
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 3 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                    onClick={() => filterWorks(3)}
                >
                    Fullstack
                </button>
                <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 4 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                    onClick={() => filterWorks(4)}
                >
                    API
                </button>
                {/* <button
                    className={`btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ${active === 5 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10'
                        }`}
                    onClick={() => filterWorks(5)}
                >
                    Github
                </button> */}
            </div>
            <div className="">
                {/* {active === 5 ? (
                    <Github />
                ) : (
                    <> */}
                        {active === 0 || active === 1 || active === 2 || active === 3 || active === 4 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 lg:gap-8 md:gap-6 gap-4 mb-8">
                                {currentCards.map((work) => (
                                    <Card1 key={work.id} work={work} />
                                ))}
                            </div>
                        ) : null}
                        <div className="flex justify-center mt-4">
                            <a href='#works'
                                className="btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm text-primary bg-primary/10"
                                onClick={prevPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </a>
                            <a href='#works'
                                className="btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ml-4 text-primary bg-primary/10"
                                onClick={nextPage}
                                disabled={indexOfLastCard >= filteredWorks.length}
                            >
                                Next
                            </a>
                        </div>
                    {/* </>
                )} */}
            </div>

        </div>
    );
}

export default WorksSection;
