import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-linear-to-tl from-[var(--third)] to-[var(--text_color)] '>
      <div className='w-[60%] h-[70%] flex bg-white rounded-xl shadow-[0px_0px_20px_5px_gray] '>
        <div className='w-[50%] h-full flex-col flex justify-center items-center gap-5 border-r-1 border-gray-400'>
          <Link href='/' className='flex justify-center items-center gap-1 text-black  '>
            <FontAwesomeIcon icon={ faArrowRightArrowLeft} className='!w-6 -rotate-45 '/>
            <p className='w-fit h-fit text-3xl pb-3 italic'>TRADE.CONN</p>
          </Link>
          <p className='text-xl text-[var(--text_color)] font-semibold'>EMPOWER YOUR BUSINESS TODAY</p>
        </div>
        <form className='w-[50%] flex flex-col justify-center items-center p-4 gap-5'>
          <p className='text-3xl font-semibold pb-5'>Login</p>
          <input type="text" required placeholder='E-mail' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <input type="text" required placeholder='Password' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <button type='submit' className='w-[80%] h-15 bg-[var(--primary)] text-white text-2xl rounded-lg ' >Submit</button>
          
        </form>
      </div>
    </div>
  )
}

export default page