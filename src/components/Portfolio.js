import React from 'react'
// importing project links

import { projects } from './constant/constantData'

const Portfolio = () => {
    return (
        <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-500  w-full text-white md:h-screen' >


            <div className='max-w-screen-lg  pt-30 pb-24 px-4 sm:p-16 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-4  ' >
                    <p className='text-4xl font-bold border-b-4 border-gray-400 inline ' >Portfolio</p>
                    <p className='py-4 font-semibold' >Check out some of my project right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ' >



                    {projects.map(({ id, title, src, link, githubLink }) => (

                        <div key={id} className='shadow-md shadow-gray-200 rounded-lg  '>
                            <p className='p-1 text-center font-semibold ' >{title}</p>
                            <img className='rounded-lg duration-200 hover:scale-105 '
                                src={src} alt="ecommerce" />
                            <div className='flex justify-center items-center '>
                                <a href={link}  target='_blank' rel='noreferrer' >
                                    <button className='px-3 py-1 m-2 duration-200 hover:scale-105 hover:border-b-4  hover:border-gray-400' >Demo</button>
                                </a>

                                <a href={githubLink}  target='_blank' rel='noreferrer' >
                                    <button className=' px-3 py-1 m-2 duration-200 hover:scale-105  hover:border-b-4  hover:border-gray-400' >Code</button>
                                </a>


                            </div>

                        </div>

                    ))}



                </div>
            </div>


        </div>





    )
}

export default Portfolio
