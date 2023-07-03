import React from 'react'

function Card1({work}) {
    return (
        <div className='col-span-1' onClick={()=>{console.log(work)}}>
            <div className="card w-full bg-base-200 shadow-lg">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {work.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{work.description}</p>
                    <div className="card-actions justify-end">
                        {work.technologies.map((tech) => (
                            <div key={tech} className="badge badge-outline">{tech}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1