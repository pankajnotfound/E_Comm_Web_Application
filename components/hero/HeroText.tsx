import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HeroText = () => {
  return (
    <div className='w-[40%] flex flex-col gap-10 p-10'>
        <p className='text-5xl/18 font-bold text-[var(--third)] ' >Powering Smarter B2B Commerce</p>
        <p className='text-lg text-gray-600'>Connect, manage, and grow your business with our end-to-end digital marketplace. From vendor onboarding to seamless logistics, scale your supply chain like never before.</p>
        <div className='w-full flex gap-5 overflow-visible'>
            <div className='flex gap-2 p-5 bg-[var(--third)] justify-center items-center rounded transition-all duration-300 ease-in-out hover:translate-x-1 text-white'>
                GET STARTED
                <FontAwesomeIcon icon={faArrowCircleRight} /> 
            </div>
            <div className='flex gap-2 p-5 bg-[var(--third)] justify-center items-center rounded transition-all duration-300 ease-in-out hover:translate-x-1 text-white'>
                SEE HOW IT WORKS
                <FontAwesomeIcon icon={faArrowCircleRight} /> 
            </div>
        </div>
    </div>
  )
}

export default HeroText