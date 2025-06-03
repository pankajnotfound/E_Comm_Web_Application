import React from 'react'
import HeaderLogo from './HeaderLogo'
import Link from 'next/link'
import { useSession } from '@/app/userSession/session'
import { div } from 'framer-motion/client'
import { useRouter } from 'next/navigation'

const Login = () => {

  const router = useRouter();


  const { loggedIn, setUserId, setLoggedIn, setUserName} = useSession();

  const handleLogOut = async () => {
    const login = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include', // ensures cookies are sent
      })
    setLoggedIn(false);
    setUserId(0);
    setUserName('');
    router.replace('/')
  }

  return (
    <div >
      {loggedIn ? 
        <div onClick={handleLogOut} className='w-fit h-10 border-1 px-2 py-1 rounded text-2xl text-nowrap place-self-center text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
          Log Out
        </div>
        :
        <div className='flex gap-2 text-black'>
          <Link href='/login' className='w-25 h-10 border-1 rounded text-2xl text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
            Login
          </Link>
          <Link href='/register' className='w-25 h-10 border-1 rounded text-2xl text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
              Register
          </Link>
        </div>
        
      }
        
    </div>
  )
}

export default Login