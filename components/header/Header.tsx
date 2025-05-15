import React from 'react'
import HeaderLogo from './HeaderLogo'
import Login from './Login'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className='flex justify-between py-3 px-8 items-center bg-[var(--primary)]'>
        <HeaderLogo />
        <Navbar />
        <Login />
    </div>
  )
}

export default Header