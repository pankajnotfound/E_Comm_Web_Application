import { faFontAwesomeLogoFull, faArrowRight, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-3xl font-bold text-black py-90 place-self-center text-center'>STAY TUNED, COMING SOOOOOON!!!!!</p>
        <div className='w-fit flex justify-center items-center gap-10 p-10'>
            <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#dbd1ff] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                <div className='w-fit flex justify-center items-center gap-5'>
                    <FontAwesomeIcon icon={faFontAwesomeLogoFull} className='!w-7 !h-7 ' />
                    <p className='text-3xl font-semibold'>FAQ</p>
                </div>
                <p className='text-lg'>Have Questions? We’ve Got Answers.</p>
                <p className='max-w-80'>Browse our frequently asked questions to find quick solutions on topics like account setup, order tracking, payments, and more.</p>
                <Link href='/faq' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[#3240b4] hover:text-white rounded hover:translate-x-1'>
                    <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                    <p>Explore Common Questions</p>
                </Link>
            </div>
            <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#dbd1ff] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                <div className='w-fit flex justify-center items-center gap-5'>
                    <FontAwesomeIcon icon={faFontAwesomeLogoFull} className='!w-7 !h-7 ' />
                    <p className='text-3xl font-semibold'>Report an Issue</p>
                </div>
                <p className='text-lg'>Something Not Working Right?</p>
                <p className='max-w-80'>Tell us what went wrong and we’ll look into it right away. Whether it's a technical glitch or a transaction concern, we’re here to help.</p>
                <Link href='/reportissue' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[#3240b4] hover:text-white rounded hover:translate-x-1'>
                    <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                    <p>Submit an Issue Report</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default page