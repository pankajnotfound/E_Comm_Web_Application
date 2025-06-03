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
        <Link href='/products' className='p-2 rounded transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            PRODUCTS
        </Link>
        <MenuElement menuHeading = 'VENDORS' element1="Vendor's T&C " element2='Become a Vendor' element3='Benefits of Being a Vendor' element4='Upload Product' path1='/vendorterms' path2='/becomevendor' path3='/vendorbenefits' path4='/uploadproduct' />
        <MenuElement menuHeading = 'ORDER' element1='My Orders' element2='Received Orders' element3='Track Order' element4='Order History' path1='/myorders' path2='/receivedorders' path3='/trackorder' path4='/allorders' />
        <MenuElement menuHeading = 'SUPPORT' element1='Contact Support' element2='FAQs' element3='Report an Issue' element4='Live Chat (coming soon)' path1='/contactsupport' path2='/faq' path3='/reportissue' path4='/livechat' />
        
        <Link href='/aboutus' className='p-2 rounded transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            ABOUT US
        </Link>

    </div>
  )
}

export default Navbar