import React from 'react'
import HeaderLogo from './HeaderLogo'
import Login from './Login'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className='z-50 w-screen flex fixed top-0 justify-between py-3 px-8 items-center bg-linear-to-b from-white to-[var(--secondary)]'>
        <HeaderLogo />
        <Navbar />
        
        <Login />
    </div>
  )
}

export default Header