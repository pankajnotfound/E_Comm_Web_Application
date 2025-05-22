import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-fit flex justify-center items-center gap-5 p-15 text-center'>
        <div className='w-fit'>
            <Image src='/resources/office.png' alt='' width={1000} height={1000} className='w-full rounded-2xl' />
        </div>
        <div className='w-fit flex flex-col justify-center items-center gap-5 max-w-[50%] '>
            <p className='text-[var(--text_color)] font-semibold'>Welcome to TRADE.CONN</p>
            <p className='text-5xl text-shadow-md text-shadow-black'>ABOUT US</p>
            <p className='max-w-[80%] text-lg text-[var(--text_color)]'>We are a team of aspiring developers focused on creating smart and simple digital solutions for modern businesses. Our platform is built to help organizations streamline operations, improve efficiency, and embrace digital transformation—without the overhead of complex tools.</p>
        </div>
        
    </div>
  )
}

export default Hero