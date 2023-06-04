import React from 'react'

import { technology } from './constant/techConstant'

const Experience = () => {
  return (
    <div name="Experience" className='bg-gradient-to-b from-gray-500  to-black w-full h-screen' >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white'>
        <div>
          <p className='text-4xl border-b-4 border-gray-400 font-bold p-2 inline '>Skills</p>
          <p className='font-semibold py-5 '>These are the technologies I have worked with </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            technology.map(({ id, title, src, style }) => (
              <div key={id} className= { `shadow-lg hover:scale-105 duration-500 rounded-lg py-2 ${style} ` } >
                <img src={src} alt="skill" className='w-20 mx-auto ' />
                <p className='font-semibold mt-2' > {title} </p>
              </div>

            ))
          }


        </div>
      </div>
    </div>
  )
}

export default Experience
