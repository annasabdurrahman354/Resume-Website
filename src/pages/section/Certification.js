import React from 'react'

const Certification = () => {
    return (
      <div className="md:mx-4">
        <h3 className="text-2xl text-gray-800 font-bold mb-4 mt-8">Certifications</h3>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            
            <div className="flex md:contents">
              <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none" />
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white" />
                </div>
              </div>
              <div className="bg-green-500 col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">Microsoft Technology Associate, Database Administrations Fundamentals</h3>
                <p className="leading-tight text-justify w-full">
                  December, 2020
                </p>
                <p className="leading-tight text-justify w-full">
                  Credential ID: wnw5m-4Smo
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Certification
