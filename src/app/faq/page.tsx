import { faCircleQuestion, faArrowRight, faFontAwesomeLogoFull, faCommentAlt, faAppleAlt, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center pt-20'>
            <div className='w-full p-10 flex justify-center items-center gap-10'>
                <div className='w-fit flex justify-center items-center p-4 '>
                    <Image src='/resources/faq.png' alt='' width={1000} height={1000} className='w-150 rounded-2xl' />
                </div>
                <div className='w-fit min-w-[30vw] flex flex-col gap-5'>
                    <p className='text-4xl font-bold  '> Frequently Asked Questions</p>
                    <p className='text-lg max-w-180 '>Have questions? We've answered the most common queries to help you get started and make the most of our platform—whether you're a vendor, a buyer, or just exploring.</p>
                </div>
            </div>
            <div className='w-full px-20 py-10 flex flex-col gap-10 '>
                <p className='text-5xl text-center font-semibold text-[#e24546]'>General Questions</p>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>1. Is my data secure on this platform?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Yes. We follow industry-standard encryption and privacy practices to ensure your personal and business data remains safe.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>2. Who do I contact for technical support or help?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Visit the Contact Support page where you can browse FAQs, report issues, or (soon) chat live with our support team.</p>
                    </div>
                </div>
                <p className='text-5xl text-center font-semibold text-[#e24546]'>For Vendors</p>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>1. How do I register my business as a vendor?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Go to the "Join as a Vendor" page, fill out the registration form with your business details, and our team will verify and approve your account within 24–48 hours.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>2. How do I list and manage my products?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Once logged in, use the Vendor Dashboard to add new products, update descriptions, set prices, and manage stock levels.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>3. How are orders handled and fulfilled?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>You’ll receive a notification when an order is placed. Use the fulfillment panel to update order status, confirm dispatch, and mark as delivered.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>4. Can I communicate with buyers directly?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Currently, direct messaging is limited. However, you’ll receive all necessary buyer details with each order to ensure smooth fulfillment.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>5. How do I handle returns or disputes?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Returns and disputes can be managed through your dashboard. Buyers can raise a request, and you’ll be notified to take action or respond.</p>
                    </div>
                </div>
                <p className='text-5xl text-center font-semibold text-[#e24546]'>For Buyers</p>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>1. How do I find the right vendors or products?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Use the search bar or browse categories. Filters like price, location, and ratings help you narrow down your choices easily.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>2. How can I track my orders?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>Go to the “Orders” section in your account to view the status of each order, including processing, shipped, and delivered stages.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 p-5 text-xl rounded-xl bg-[#fde5f3] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black]'>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faQuestion} className='!w-5 !h-5' />
                        <p>3. What payment methods are supported?</p>
                    </div>
                    <div className='w-full flex gap-10 justify-start items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-5 !h-5' />
                        <p>We currently support major payment gateways including credit/debit cards, net banking, and UPI (where applicable).</p>
                    </div>
                </div>
            </div>
            <div className='w-fit flex justify-center items-center gap-10 p-10 pb-20'>
                <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#fde5f3] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                    <div className='w-fit flex justify-center items-center gap-5'>
                        <FontAwesomeIcon icon={faFontAwesomeLogoFull} className='!w-7 !h-7 ' />
                        <p className='text-3xl font-semibold'>Report an Issue</p>
                    </div>
                    <p className='text-lg'>Something Not Working Right?</p>
                    <p className='max-w-80'>Tell us what went wrong and we’ll look into it right away. Whether it's a technical glitch or a transaction concern, we’re here to help.</p>
                    <Link href='/reportissue' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[#e24546] hover:text-white rounded hover:translate-x-1'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                        <p>Submit an Issue Report</p>
                    </Link>
                </div>
                <div className='w-fit flex flex-col gap-4 p-5 justify-center items-start text-start bg-[#fde5f3] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_0.1px_black] '>
                    <div className='w-fit flex justify-center items-center gap-5'>
                        <FontAwesomeIcon icon={faCommentAlt} className='!w-7 !h-7 ' />
                        <p className='text-3xl font-semibold'>Live Chat</p>
                    </div>
                    <p className='text-lg'>Real-Time Help, Coming Soon!</p>
                    <p className='max-w-80'>Soon you'll be able to chat directly with our support team for faster responses and real-time problem solving—right from this page.</p>
                    <Link href='/livechat' className='w-fit flex gap-3 p-2 transition-all duration-300 ease-in-out hover:bg-[#e24546] hover:text-white rounded hover:translate-x-1'>
                        <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 place-self-center' />
                        <p>Stay tuned for live chat support</p>
                    </Link>
                </div>
            </div>
        </div>  
  )
}

export default page