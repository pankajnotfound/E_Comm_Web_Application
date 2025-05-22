import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-fit h-fit flex flex-col justify-center items-center p-40 pb-60 mb-15 gap-10 shadow-[0px_0px_20px_1px_gray] bg-[url(/resources/contact.png)] rounded-lg bg-center bg-no-repeat'>
        <p className='text-black text-lg '>Want to work with us?</p>
        <p className='text-6xl text-black '>CONTACT US NOW!!!!</p>
        <div className=' w-fit flex gap-2 p-5 mt-0 text-black bg-white justify-center items-center rounded transition-all duration-300 ease-in-out hover:translate-x-1 '>
            GET STARTED
            <FontAwesomeIcon icon={faArrowCircleRight} /> 
        </div>
    </div>
  )
}

export default Contact