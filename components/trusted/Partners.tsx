import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faDropbox, faFacebook, faGoogle, faImdb, faMicrosoft, faPaypal, faSalesforce, faShopify, faSlack, faStripe, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Partners = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className=''>
            <p className='text-5xl font-bold text-center text-[var(--text_color)] '>Some of Our Well-known Partners</p>
        </div>
        <div className='w-full flex flex-wrap gap-15 justify-center items-center '> 
            <Link href='https://www.google.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faGoogle} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>GOOGLE</p>
            </Link>
            <Link href='https://www.facebook.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faFacebook} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>FACEBOOK</p>
            </Link>
            <Link href='https://www.amazon.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faAmazon} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>AMAZON</p>
            </Link>
            <Link href='https://www.youtube.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faYoutube} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>YOUTUBE</p>
            </Link>
            <Link href='https://www.microsoft.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faMicrosoft} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>MICROSOFT</p>
            </Link>
            <Link href='https://www.imdb.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faImdb} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>IMDB</p>
            </Link>
            <Link href='https://www.dropbox.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faDropbox} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>DROPBOX</p>
            </Link>
            <Link href='https://www.salesforce.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faSalesforce} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>SALESFORCE</p>
            </Link>
            <Link href='https://www.shopify.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faShopify} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>SHOPIFY</p>
            </Link>
            <Link href='https://www.slack.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faSlack} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>SLACK</p>
            </Link>
            <Link href='https://www.stripe.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faStripe} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>STRIPE</p>
            </Link>
            <Link href='https://www.paypal.com/' className='w-fit flex gap-5 justify-center items-center transition-all duration-300 ease-in-out rounded p-2 hover:text-white hover:bg-[var(--primary)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faPaypal} className='!w-15 !h-15' />
                <p className='text-3xl font-semibold'>PAYPAL</p>
            </Link>
        </div>
    </div>
  )
}

export default Partners