import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faBoxes,faShieldAlt, faTruck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons/faUserCog';
import Link from 'next/link';


const FeaturesCard = () => {
  return (
    <div className='w-full p-10 gap-15 flex flex-wrap justify-center items-center'>
        <Link href='/howitworks/vendoronbording' className='w-[40%] flex flex-col bg-[var(--text_color)] text-white rounded-lg p-5 gap-5'>
            <div className='flex gap-2 justify-center items-center'>
                <FontAwesomeIcon icon={faUserPlus} className='!w-20 !h-20' />
                <p className='text-3xl'>Vendor Onboarding in Minutes</p>
            </div>
            <p className='text-2xl text-center'>Start selling with a few clicks.</p>
            <div className='flex gap-2 p-5 bg-[var(--secondary)] text-black justify-center items-center rounded transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-black'>
                SEE HOW IT WORKS
                <FontAwesomeIcon icon={faArrowCircleRight} /> 
            </div>
        </Link>
        <Link href='/howitworks/inventorymanagement' className='w-[40%] flex flex-col bg-[var(--text_color)] text-white rounded-lg p-5 gap-5'>
            <div className='flex gap-2 justify-center items-center'>
                <FontAwesomeIcon icon={faBoxes} className='!w-20 !h-20' />
                <p className='text-3xl'>Smart Inventory Management</p>
            </div>
            <p className='text-2xl text-center'>Stay in control of stock and fulfillment.</p>
            <div className='flex gap-2 p-5 bg-[var(--secondary)] text-black justify-center items-center rounded transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-black'>
                SEE HOW IT WORKS
                <FontAwesomeIcon icon={faArrowCircleRight} /> 
            </div>
        </Link>
        <Link href='/howitworks/logisticandtracking' className='w-[40%] flex flex-col bg-[var(--text_color)] text-white rounded-lg p-5 gap-5'>
            <div className='flex gap-2 justify-center items-center'>
                <FontAwesomeIcon icon={faTruck} className='!w-20 !h-20' />
                <p className='text-3xl'>Integrated Logistics & Tracking</p>
            </div>
            <p className='text-2xl text-center'>Real-time shipment visibility.</p>
            <div className='flex gap-2 p-5 bg-[var(--secondary)] text-black justify-center items-center rounded transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-black'>
                SEE HOW IT WORKS
                <FontAwesomeIcon icon={faArrowCircleRight} /> 
            </div>
        </Link>
        <Link href='/howitworks/transactions' className='w-[40%] flex flex-col bg-[var(--text_color)] text-white rounded-lg p-5 gap-5'>
            <div className='flex gap-2 justify-center items-center'>
                <FontAwesomeIcon icon={faShieldAlt} className='!w-20 !h-20' />
                <p className='text-3xl'>Secure Transactions</p>
            </div>
            <p className='text-2xl text-center'>Enterprise-grade encryption & invoicing.</p>
            <div className='flex gap-2 p-5 bg-[var(--secondary)] text-black justify-center items-center rounded transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-black'>
                SEE HOW IT WORKS
                <FontAwesomeIcon icon={faArrowCircleRight} /> 
            </div>
        </Link>
    </div>
    
  )
}

export default FeaturesCard