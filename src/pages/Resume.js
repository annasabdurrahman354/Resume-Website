import React from 'react'
import Education from './section/Education'
import Organization from './section/Organization'
import Do from './section/Do'
import Skill from './section/Skill'
import Certification from './section/Certification'
import Award from './section/Award'

const Resume = () => {
    return (
        <section className="py-8">
          <div className="flex flex-wrap md:px-4">
            <div className="w-full">
              <About/>
              <Do/>
              <Skill/>
              <Education/>
              <Organization/>
              <Certification/>
              <Award/>
            </div>
          </div>
        </section>
    )
}

function About() {
  return (
    <div className="md:mx-4">
      <h3 className="text-2xl text-gray-800 font-bold mb-4">Who Am I?</h3>
      <p className="text-sm text-gray-400 leading-6 mb-3">Right now, I am studying at Universitas Sebelas Maret. I majored in Computer Science and expect to graduate in 2023 and get a bachelor of computer degree. During my studies, I also took informal education at the Roudlotul Jannah Islamic Boarding School, Surakarta, a educational institution that accommodates students in deepening religious knowledge, so that after graduation it is expected to become a generation that not only have skills but also religious knowledge. Organizational experience is more often obtained from my boarding school. As for work experience, I often take a developer job that is requested from my friends. I do not limit the work I accept. As long as I feel capable, I will take it, besides that I am also happy to try new things.</p>
      <p className="text-sm text-gray-400 leading-6 mb-3"> </p>
    </div>
  );
}

export default Resume
