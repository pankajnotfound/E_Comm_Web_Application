import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HeaderLogo from '../header/HeaderLogo'

const Footerleft = () => {
  return (
    <div className='flex flex-col gap-10 '>
          <div className='bottom-0 flex flex-col gap-2'>
            <HeaderLogo />
            <p className='text-lg max-w-[70%]'>Owned & Operated From B.K. Birla College Kalyan, Thane, Maharashtra, India - 421304 </p>
            <p className='text-lg max-w-[70%]'>This is a Project Made for project submission and is not an actual operating business.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='w-full group flex gap-2 '>
              <FontAwesomeIcon icon={faLocationDot} className='w-6 h-6 text-black transition-all duration-300 ease-in-out group-hover:text-white' />
              <p>	B. K. Birla College Road, Kalyan - 421 304. </p>
            </div>
            <div className='w-full group flex gap-2'>
              <FontAwesomeIcon icon={faPhone} className='w-6 h-6 text-black transition-all duration-300 ease-in-out group-hover:text-white' />
              <p>	Toll-Free Number: 1800 233 0144 </p>
            </div>
            <div className='w-full group flex gap-2'>
              <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6 text-black transition-all duration-300 ease-in-out group-hover:text-white' />
              <p>	Email: pankajjakhar808@gmail.com </p>
            </div>
          </div>
        </div>
  )
}

export default Footerleft