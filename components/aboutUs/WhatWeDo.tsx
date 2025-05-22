import Image from 'next/image'
import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='w-fit flex justify-center items-center gap-5 p-15 text-center'>
            <div className='w-fit flex flex-col justify-center items-center gap-15 max-w-[50%] '>
                <p className='text-5xl text-shadow-md font-semibold'>WHAT WE DO?</p>
                <p className='max-w-[80%] text-lg text-[var(--text_color)]'>We connect businesses through a smart, easy-to-use B2B platform that simplifies product sourcing, order management, and vendor collaboration. From streamlining operations to boosting efficiency, we help companies grow and thrive—digitally.</p>
            </div>
            <div className='w-fit'>
                <Image src='/resources/techBackground.png' alt='' width={1000} height={1000} className='w-full rounded-2xl' />
            </div>
        </div>
  )
}

export default WhatWeDo