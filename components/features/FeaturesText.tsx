import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const FeaturesText = () => {
  return (
    <div className='flex flex-col gap-5'>
        <p className='text-4xl font-semibold'>Why Choose Our Platform?</p>
        <div className='flex gap-5 items-center'>
            <FontAwesomeIcon icon={faArrowRight} />
            <p className='text-xl'>Everything you need to run and scale your B2B operations — fast, secure, and vendor-friendly.</p>
        </div>
    </div>
  )
}

export default FeaturesText