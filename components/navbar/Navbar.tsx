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
        <MenuElement menuHeading = 'SERVICES' element1='Hi' element2='Hello' element3='Jai mata di' element4='Yoo' />
        <MenuElement menuHeading = 'VENDORS' element1='Hi' element2='Hello' element3='Jai mata di' element4='Yoo' />
        <MenuElement menuHeading = 'ORDER' element1='Hi' element2='Hello' element3='Jai mata di' element4='Yoofhsjdfktytrfbxdh' />
        <MenuElement menuHeading = 'SUPPORT' element1='Hi' element2='Hello' element3='Jai mata di' element4='Yoo' />
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