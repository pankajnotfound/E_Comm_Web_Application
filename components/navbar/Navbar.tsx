'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import MenuElement from './MenuElement';

const Navbar = () => {

    const [serviceDDActive, setServiceDDActive] = useState(false);


  return (
    <div className='flex gap-8 tex-3xl'>
        <Link href='/' className='p-2 rounded transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            HOME
        </Link>
        <Link href='/dashboard' className='p-2 rounded transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            DASHBOARD
        </Link>
        <Link href='/dashboard' className='p-2 rounded transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            PRODUCTS
        </Link>
        <MenuElement menuHeading = 'VENDORS' element1='Browse Vendors' element2='Become a Vendor' element3='Top Rated Vendors' element4='Upload Product' />
        <MenuElement menuHeading = 'ORDER' element1='My Orders' element2='Received Orders' element3='Track Order' element4='Order History' />
        <MenuElement menuHeading = 'SUPPORT' element1='Contact Support' element2='FAQs' element3='Report an Issue' element4='Live Chat (coming soon)' />
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            CART
        </Link>
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            ABOUT US
        </Link>

    </div>
  )
}

export default Navbar