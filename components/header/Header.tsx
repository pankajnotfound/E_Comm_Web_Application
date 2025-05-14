import React from 'react'
import HeaderLogo from './HeaderLogo'
import Login from './Login'

const Header = () => {
  return (
    <div className='flex justify-between py-3 px-8 items-center bg-[var(--primary)]'>
        <HeaderLogo />
        <Login />
    </div>
  )
}

export default Header