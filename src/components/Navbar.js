import React, { useState } from 'react'

// importing icons
import { FaBars, FaTimes } from 'react-icons/fa'

// importing constant data
import { NavListLink } from './constant/constantData'

// importing react scroll link
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showSideNav, setSideNav] = useState(false)

  return (
    <div className='flex justify-between items-center w-full h-20  text-white bg-black fixed '>
      <div>
        <h1 className='text-3xl font-signature px-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-500' >Aarti Khatri</h1>
      </div>

   
        <ul className='hidden md:flex'>

          {NavListLink.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 '> 
            <Link to={link} smooth={true} duration={500} >  {link} </Link>
            </li>

          ))}

        </ul>
      

      <div onClick={()=> setSideNav(!showSideNav)} className='cursor-pointer pr-3 z-10 text-gray-200 md:hidden '>
        {showSideNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

        { showSideNav &&
          <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-slate-900 to-gray-500'>

            {NavListLink.map(({id, link}) => (
            <li key={id} className='py-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 text-4xl '  >
                 <Link onClick={()=> setSideNav(!showSideNav)} to={link} smooth={true} duration={500} >  {link} </Link>
              
              </li>

            ))}

          </ul>

        }
      


    </div>
  )
}

export default Navbar
