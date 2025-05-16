import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const FooterRight = () => {
  return (
    <div>
        <div className='flex gap-15 border-b-1 p-4 border-gray-500'>
            <div>
                <p className='text-2xl font-semibold py-5'>Quick Navigation</p>
                <ul className='flex flex-col gap-3 pl-2'>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>All Services</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>DashBoard</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Orders</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Vendors List</li>
                </ul>
            </div>
            <div>
                <p className='text-2xl font-semibold py-5'>Help</p>
                <ul className='flex flex-col gap-3 pl-2'>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Contact Support</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>FAQ</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Terms & Conditions</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-2xl font-semibold py-5'>Company</p>
                <ul className='flex flex-col gap-3 pl-2'>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>About Us</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Contact Us</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Our Origin</li>
                    <li className=' transition-all duration-300 ease-in-out opacity-50 hover:translate-x-1 hover:opacity-100'>Career</li>
                </ul>
            </div>
        </div>
        <div className='w-full flex justify-between py-5 '>
            <p className='font-semibold'>Developed By Pankaj Jakhar and Deepa Yadav.</p>
            <div className='flex gap-2'>
                <FontAwesomeIcon icon={faGithub} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
                <FontAwesomeIcon icon={faLinkedin} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
                <FontAwesomeIcon icon={faInstagram} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
                <FontAwesomeIcon icon={faXTwitter} className='w-5 h-5 transition-all duration-300 ease-in-out hover:text-white'/>
            </div>
        </div>
    </div>
  )
}

export default FooterRight