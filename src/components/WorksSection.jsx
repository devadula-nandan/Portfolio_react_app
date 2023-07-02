import React from 'react'
import Heading from './Heading'
import Card1 from './Card1'
import Github from './Github'

function WorksSection() {
    const [active, setActive] = React.useState(1)
    const [data, setData] = React.useState({})


    return (
        <div className='container mx-auto pt-24 px-3' id="works">
            <div className='px-5 md:px-4'>
                <Heading text="Works" />
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-4 mt-20 mb-8">
                <button className={'btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ' + (active === 1 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10')} onClick={() => setActive(1)}>Frontend</button>
                <button className={'btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ' + (active === 2 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10')} onClick={() => setActive(2)}>Backend</button>
                <button className={'btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ' + (active === 3 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10')} onClick={() => setActive(3)}>Fullstack</button>
                <button className={'btn btn-ghost font-semibold text-sm md:text-base xl:text-lg btn-sm ' + (active === 4 ? 'text-primary bg-primary/10' : 'hover:bg-primary/10')} onClick={() => setActive(4)}>Github</button>

            </div>
            <div className="">
                {(active === 1 || active === 2 || active === 3) &&
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-8 md:gap-6 gap-4 mb-8">
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                    </div>
                }
                {active === 4 &&
                    <Github />
                }

                {/* <button className="btn btn-accent text-accent-content mx-auto block">Load more</button> */}
            </div>
        </div>
    )
}

export default WorksSection