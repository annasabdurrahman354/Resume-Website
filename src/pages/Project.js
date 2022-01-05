import React from 'react'
import {
    Link
} from "react-router-dom";
  
import Data from '../assets/data'

const Project = () => {
    return (
        <section className="pb-10">
            <div className="flex flex-wrap md:px-4">
            {Object.keys(Data.projects).map((key) => (
                <div className="w-full lg:w-1/2">
                    <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
                        <div className="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                            <img src="/static/media/project-01.44803522.jpg" alt="coverImage" className="w-full h-full object-cover object-center" />
                            <div className="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                            <ul className="flex flex-wrap">
                                <li className="m-2">
                                <Link className="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600" exact to={"/project/" + key}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
                                    </svg>
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    <h3 className="text-lg font-medium text-purple-800 mb-2">{Data.projects[key].title}</h3>
                    <p className="text-gray-400">{Data.projects[key].desc}</p>
                    </div>
                </div>
            ))}
        </div>
        </section>
    )
}
  
export default Project
