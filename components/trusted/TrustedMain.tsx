import React from 'react'
import Partners from './Partners'

const TrustedMain = () => {
  return (
    <div className='flex flex-col p-15 gap-20 border-b-1 border-gray-400 '>
        <div className=' flex flex-col gap-10  '>
            <p className='text-5xl text-[var(--text_color)] font-semibold'>Trusted by <strong>500+</strong> Growing Businesses</p>
            <p className='text-xl'>Our platform is trusted by manufacturers, wholesalers, and suppliers across industries — from raw materials to finished goods.</p>
        </div>
        <Partners />
    </div>
  )
}

export default TrustedMain