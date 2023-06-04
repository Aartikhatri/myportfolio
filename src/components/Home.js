import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import profile from '../assets/aartiImg.jpg'

// importing react scroll link
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='font-semibold'>Hey !</h2>
                    <h1 className='font-semibold'>
                        Aarti khatri here..</h1>

                    <h3 className='text-3xl sm:text-6xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-500 animate-pulse '>I am a Web Developer</h3>
                    <p className='text-gray-400 py-1 '>
                        I have 9 months of experience building and designing web applications. Currently , I love to work on web application using technology like HTML , CSS , Java-script , React and Bootstrap  
                    </p>
                    <div>
                        <Link to="Portfolio" smooth={true} duration={500} className='group w-fit px-6 py-3 mt-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500'>


                            Portfolio
                            <span className='group-hover:rotate-90 duration-300 ' >
                                <HiArrowNarrowRight />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={profile} alt="my profile"
                        className='rounded-2xl mx-auto w-2/3  md:w-full' />
                </div>

            </div>

        </div>
    )
}

export default Home
