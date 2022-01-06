import React from 'react'

const Award = () => {
    return (
      <div className="md:mx-4">
        <h3 className="text-2xl text-gray-800 font-bold mb-4 mt-8">Awards</h3>
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
                <h3 className="font-semibold text-lg mb-1">Lomba Inovasi Digital Mahasiswa 2020</h3>
                <p className="leading-tight text-justify w-full">
                  Finalist
                </p>
                <a className="mt-4 w-8 h-8 text-xl text-green-600 flex items-center justify-center bg-green-200 rounded hover:text-white hover:bg-green-600 mb-4" href='https://github.com/annasabdurrahman354/Resume-Website/raw/master/public/files/Sertif-LIDM.pdf' >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    )
}

export default Award
