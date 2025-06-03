import { faArrowRight, faArrowRightArrowLeft, faCommentAlt, faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center pt-30 '>
      <form className='w-full p-10 flex justify-center items-center gap-20 pb-20'>
            <div className='w-fit flex justify-center items-center p-4 '>
              <Image src='/resources/report.png' alt='' width={1000} height={1000} className='w-150 rounded-2xl' />
            </div>
            <div className='w-fit min-w-[30vw] flex flex-col gap-5'>
              <p className='text-3xl font-bold'>REPORT AN ISSUE / SEND FEEDBACK</p>
              <input required type="text" placeholder='Your Name' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#3240b4] ' />
              <input required type="text" placeholder='E-mail' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#3240b4] ' />
              <textarea required name="" id="" placeholder='Your Message / Issue' className='min-h-10 max-h-40 overflow-auto text-lg pl-4 outline-1 outline-black rounded focus:outline-[#3240b4]' ></textarea>
              <p className='text-xl font-semibold'>Attachments (Optional)</p>
              <input type="file" placeholder='Upload' className='text-lg p-1 file:p-1 file:bg-[#3240b4] file:text-white file:outline-1 outline-black file:rounded focus:file:outline-[#3240b4] ' />
              <button type='submit' className='w-fit px-5 py-2 text-lg font-semibold bg-[#3240b4] rounded text-white self-center' >
                Submit
              </button>
            </div>
          </form>
          <div className='w-fit flex justify-center items-center gap-10 p-10 py-20'>
            <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#91b8fd] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
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
            <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#91b8fd] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                <div className='w-fit flex justify-center items-center gap-5'>
                    <FontAwesomeIcon icon={faCommentAlt} className='!w-7 !h-7 ' />
                    <p className='text-3xl font-semibold'>Live Chat</p>
                </div>
                <p className='text-lg'>Real-Time Help, Coming Soon!</p>
                <p className='max-w-80'>Soon you'll be able to chat directly with our support team for faster responses and real-time problem solving—right from this page.</p>
                <Link href='/livechat' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[#3240b4] hover:text-white rounded hover:translate-x-1'>
                    <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                    <p>Stay tuned for live chat support</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default page