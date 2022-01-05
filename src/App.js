import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { NavLink } from "react-router-dom";

import Profile from './components/Profile'
import ProjectDetail from './pages/ProjectDetail'
import WorkDetail from './pages/WorkDetail'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Work from './pages/Work'

function App() {
  return (
    <div id="root">
      <main className="min-h-screen relative bg-gray-50 pb-10">
        <div className="h-60 w-full back">
        </div>
        <div className="container px-4">
          <div className="flex flex-wrap px-4">
            <BrowserRouter>
              <Profile/>
              <div className="w-full lg:w-2/3 ">  
                  <Nav/>
                  <Routes>
                    <Route path="/" element={<Resume />} />
                    <Route path="project/" element={<Project />} />
                    <Route path="project/:id" element={<ProjectDetail />}/>
                    <Route path="work/" element={<Work />} />
                    <Route path="work/:id" element={<WorkDetail />}/>
                  </Routes>
                
              </div>
            </BrowserRouter>
          </div>
        </div>
      </main>
    </div>
  );
}

function Nav() {
  return (
      <nav className="md:mx-8 mb-3 -my-8 px-6 py-2 z-10 sticky top-0 bg-white shadow-md rounded">
        <ul className="flex flex-wrap">
          <li className="m-3 lg:mx-5">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-800 text-medium font-semibold hover:text-purple-600" : "text-gray-700 text-medium hover:text-purple-600"}>Resume</NavLink>
          </li>
          <li className="m-3 lg:mx-5">
            <NavLink to="project" className={({ isActive }) => isActive ? "text-purple-800 text-medium font-semibold hover:text-purple-600" : "text-gray-700 text-medium hover:text-purple-600"}>Project</NavLink>
          </li>
          <li className="m-3 lg:mx-5">
            <NavLink to="work" className={({ isActive }) => isActive ? "text-purple-800 text-medium font-semibold hover:text-purple-600" : "text-gray-700 text-medium hover:text-purple-600"}>Work</NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default App;
