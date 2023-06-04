import React from 'react'

import { socialId } from './constant/constantData'


const SocialLinks = () => {
    return (
        <div className=' lg:flex flex-col top-[55%]  md:top-[35%] left-0 fixed' >
            <ul>

                {socialId.map(({ id, child, href, style, download }) =>

                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300   ${style} `}>
                        <a href={href} className='flex justify-between items-center w-full text-white font-semibold'
                        download={download}
                        target='_blank'
                        rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>


                )}



            </ul>
        </div>
    )
}

export default SocialLinks
