import React from 'react'
import HeaderLogo from './HeaderLogo'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='flex gap-2 text-black'>
        <Link href='/login' className='w-25 h-10 border-1 rounded text-2xl text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
            Login
        </Link>
        <Link href='/register' className='w-25 h-10 border-1 rounded text-2xl text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
            Register
        </Link>
    </div>
  )
}

export default Login