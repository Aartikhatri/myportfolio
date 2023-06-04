import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-500 text-white p-4' >

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div className='pb-6'>
                <p className='text-4xl font-bold border-b-4 inline border-gray-400 '>Contact</p>
                <p className='font-semibold py-5'>sumbit the form below to get in touch with me </p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/09670fda-ab56-4dfd-b4d3-749b321a9088" method='POST' className='flex flex-col w-full md:w-1/2  '>
                    <input type="text" name="name" placeholder='Enter your name ' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ' />

                    <input type="text" name="email" placeholder='Enter your email ' className='my-4  p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none ' />

                    <textarea name="message"rows="10" placeholder='Write your message '
                     className='p-2 bg-transparent  border-2 rounded-md mb-2 text-white focus:outline-none ' ></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500  px-4 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ' >Let's talk</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
