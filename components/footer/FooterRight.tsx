import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const FooterRight = () => {
  return (
    <div>
        <div className='flex gap-15 border-b-1 p-4 border-gray-500'>
            <div>
                <p className='text-2xl font-semibold py-5'>Quick Navigation</p>
                <ul className='flex flex-col gap-3 pl-2'>
                    <Link href='/' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>All Services</Link>
                    <Link href='/dashboard' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>DashBoard</Link>
                    <Link href='/myorders' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Orders</Link>
                    <Link href='/becomevendor' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Become a Vendor</Link>
                </ul>
            </div>
            <div>
                <p className='text-2xl font-semibold py-5'>Help</p>
                <ul className='flex flex-col gap-3 pl-2'>
                    <Link href='/contactsupport' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Contact Support</Link>
                    <Link href='/faq' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>FAQ</Link>
                    <Link href='/terms' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Terms & Conditions</Link>
                    <Link href='/privacypolicy' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Privacy Policy</Link>
                </ul>
            </div>
            <div>
                <p className='text-2xl font-semibold py-5'>Company</p>
                <ul className='flex flex-col gap-3 pl-2'>
                    <Link href='/aboutus' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>About Us</Link>
                    <Link href='/reportissue' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Contact Us</Link>
                    <Link href='/aboutus' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Our Origin</Link>
                    <Link href='/products' className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Products</Link>
                </ul>
            </div>
        </div>
        <div className='w-full flex justify-between py-5 '>
            <p className='font-semibold'>Developed By Pankaj Jakhar and Deepa Yadav.</p>
            <div className='flex gap-2'>
                <Link href='https://github.com/pankajnotfound'>
                    <FontAwesomeIcon icon={faGithub} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
                </Link>
                <Link href='https://linkedin.com/in/pankajjakhar8'>
                    <FontAwesomeIcon icon={faLinkedin} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
                </Link>
                <Link href='https://www.instagram.com/pankajnotfound/'>
                    <FontAwesomeIcon icon={faInstagram} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
                </Link>
                <Link href='https://github.com/pankajnotfound'>
                    <FontAwesomeIcon icon={faXTwitter} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FooterRight