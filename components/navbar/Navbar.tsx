import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-8 tex-3xl'>
        <Link href='/' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            HOME
        </Link>
        <Link href='/dashboard' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            DASHBOARD
        </Link>
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            SERVICES
        </Link>
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            VENODRS
        </Link>
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            ORDER
        </Link>
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            SUPPORT
        </Link>
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            CART
        </Link>
        <Link href='' className='p-2 rounded transition-all duration-300 ease-in-out border-[var(--text_color)]/0 border-2 hover:border-[var(--text_color)]/100 hover:bg-[var(--secondary)]'>
            ABOUT US
        </Link>

    </div>
  )
}

export default Navbar