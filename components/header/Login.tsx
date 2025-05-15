import React from 'react'
import HeaderLogo from './HeaderLogo'

const Login = () => {
  return (
    <div className='flex gap-2 text-black'>
        <div className='w-25 h-10 border-1 rounded-lg text-2xl text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
            Login
        </div>
        <div className='w-25 h-10 border-1 rounded-lg text-2xl text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
            Register
        </div>
    </div>
  )
}

export default Login