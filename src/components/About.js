import React from 'react'

const About = () => {
    return (
        <div name='About' className='w-full h-screen bg-gradient-to-b from-yellow-300 to-orange-500  ' >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >

                <div className='pb-5' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'> About</p>
                </div>


                <p  className='text-xl mt-14' > I am <span className='font-semibold' >  Aarti Khatri </span> , I have completed a comprehensive full-stack program from Testbook Skill Academy. I have gained hands-on experience by working on numerous projects, which has further enhanced my expertise in this field.</p>

                <br />

                <p className='text-xl' >
                Throughout my projects, I have likely worked on both front-end and back-end development. On the front-end, I have learned <span className='font-semibold'>
                HTML, CSS, JavaScript , React , Redux , CSS library (Bootstrap , MaterialUi )</span> to create  interactive user interfaces. <br />
                In terms of back-end development, I have learned <span className='font-semibold' >NodeJs , ExpressJS and MongoDB as database</span>
                </p>



            </div>


        </div>
    )
}

export default About
