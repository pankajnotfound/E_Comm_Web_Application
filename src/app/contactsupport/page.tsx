import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesomeLogoFull } from '@fortawesome/free-regular-svg-icons/faFontAwesomeLogoFull'
import { faArrowRight, faBookJournalWhills } from '@fortawesome/free-solid-svg-icons'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons/faAlignJustify'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center pt-20'>
        <div className='w-full p-10 flex justify-center items-center gap-10'>
            <div className='w-fit flex justify-center items-center p-4 '>
                <Image src='/resources/contactsupport.png' alt='' width={1000} height={1000} className='w-150 rounded-2xl' />
            </div>
            <div className='w-fit min-w-[30vw] flex flex-col gap-5'>
                <p className='text-4xl font-bold  '>Contact Support</p>
                <p className='text-lg'>Need help? You’re in the right place.</p>
                <p className='text-lg max-w-180 '>Whether you're facing a technical issue, have questions about your orders, or just need general assistance, our support team is here to help. We aim to provide timely and effective solutions so you can focus on what matters most—running your business.</p>
            </div>
        </div>
        <div className='w-fit flex justify-center items-center gap-10 p-10 pb-20'>
            <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#ebbbe9] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                <div className='w-fit flex justify-center items-center gap-5'>
                    <FontAwesomeIcon icon={faCircleQuestion} className='!w-7 !h-7 ' />
                    <p className='text-3xl font-semibold'>FAQ</p>
                </div>
                <p className='text-lg'>Have Questions? We’ve Got Answers.</p>
                <p className='max-w-80'>Browse our frequently asked questions to find quick solutions on topics like account setup, order tracking, payments, and more.</p>
                <Link href='/faq' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[var(--forth)] hover:text-white rounded hover:translate-x-1'>
                    <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                    <p>Explore Common Questions</p>
                </Link>
            </div>
            <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#ebbbe9] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                <div className='w-fit flex justify-center items-center gap-5'>
                    <FontAwesomeIcon icon={faFontAwesomeLogoFull} className='!w-7 !h-7 ' />
                    <p className='text-3xl font-semibold'>Report an Issue</p>
                </div>
                <p className='text-lg'>Something Not Working Right?</p>
                <p className='max-w-80'>Tell us what went wrong and we’ll look into it right away. Whether it's a technical glitch or a transaction concern, we’re here to help.</p>
                <Link href='/reportissue' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[var(--forth)] hover:text-white rounded hover:translate-x-1'>
                    <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                    <p>Submit an Issue Report</p>
                </Link>
            </div>
            <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#ebbbe9] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                <div className='w-fit flex justify-center items-center gap-5'>
                    <FontAwesomeIcon icon={faCommentAlt} className='!w-7 !h-7 ' />
                    <p className='text-3xl font-semibold'>Live Chat</p>
                </div>
                <p className='text-lg'>Real-Time Help, Coming Soon!</p>
                <p className='max-w-80'>Soon you'll be able to chat directly with our support team for faster responses and real-time problem solving—right from this page.</p>
                <Link href='/livechat' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[var(--forth)] hover:text-white rounded hover:translate-x-1'>
                    <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                    <p>Stay tuned for live chat support</p>
                </Link>
            </div>
        </div>
    </div>  
  )
}

export default page