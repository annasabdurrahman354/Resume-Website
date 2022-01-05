import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
                <ul className="flex flex-wrap">
                    <li className="m-3 lg:mx-5"><a className="text-gray-800 text-medium hover:text-purple-600 text-purple-600" aria-current="page">Resume</a></li>
                    <li className="m-3 lg:mx-5"><a className="text-gray-800 text-medium hover:text-purple-600" href="https://musing-mcnulty-4b35c6.netlify.app/works" aria-current="page">Project</a></li>
                    <li className="m-3 lg:mx-5"><a className="text-gray-800 text-medium hover:text-purple-600" href="https://musing-mcnulty-4b35c6.netlify.app/works" aria-current="page">Work</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
