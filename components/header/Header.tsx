import React from 'react'
import HeaderLogo from './HeaderLogo'
import Login from './Login'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className='flex justify-between py-3 px-8 items-center bg-linear-to-b from-[var(--primary)] to-[var(--secondary)]'>
        <HeaderLogo />
        <Navbar />
        <Login />
    </div>
  )
}

export default Header