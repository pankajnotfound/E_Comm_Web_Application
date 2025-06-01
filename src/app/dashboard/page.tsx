'use client';
import React from 'react'
import { useSession } from '../userSession/session'
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faBoxesAlt, faHandsHelping, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt';
import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons/faBangladeshiTakaSign';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons/faHeartCrack';

const page = () => {

  const router = useRouter();
  const { userName, setLoggedIn, setUserId, setUserName } = useSession();
  
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
    <div className=' w-full h-fit p-40 bg-[var(--secondary)] flex flex-col gap-10 justify-center items-start '>
      <div className='w-full flex gap-2 justify-between items-center'>
        <p className='text-2xl '>Hello, {userName}</p>
        <div className='w-fit flex gap-5'>
          <div className='w-fit h-10 border-1 px-2 py-1 rounded text-2xl text-center text-nowrap cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
            Edit Profile
          </div>
          <div onClick={handleLogOut} className='w-25 h-10 border-1 px-2 py-1 rounded text-2xl text-center cursor-pointer hover:bg-[var(--text_color)] hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1'>
            LogOut
          </div>
        </div>
      </div>  
      <div className='w-full flex flex-wrap gap-10 p-10 justify-center items-center '>
        <div className='w-[48%] bg-[var(--primary)] flex flex-nowrap justify-center items-center gap-10 p-5 py-20 rounded-2xl shadow-[0px_0px_20px_1px_gray] transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>
          <FontAwesomeIcon icon={faShoppingBag} className='!w-15 !h-15 p-4' />
          <p className='text-3xl font-semibold p-4 place-self-center'>Browse Products</p>
        </div>
        <div className='w-[48%] bg-[var(--primary)] flex flex-nowrap justify-center items-center gap-10 p-5 py-20 rounded-2xl shadow-[0px_0px_20px_1px_gray] transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>
          <FontAwesomeIcon icon={faSearchPlus} className='!w-15 !h-15 p-4' />
          <p className='text-3xl font-semibold p-4 place-self-center'>Browse Vendors</p>
        </div>
        <div className='w-[48%] bg-[var(--primary)] flex flex-nowrap justify-center items-center gap-10 p-5 py-20 rounded-2xl shadow-[0px_0px_20px_1px_gray] transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>
          <FontAwesomeIcon icon={faUserPlus} className='!w-15 !h-15 p-4' />
          <p className='text-3xl font-semibold p-4 place-self-center'>Become a Vendor</p>
        </div>
        <div className='w-[48%] bg-[var(--primary)] flex flex-nowrap justify-center items-center gap-10 p-5 py-20 rounded-2xl shadow-[0px_0px_20px_1px_gray] transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>
          <FontAwesomeIcon icon={faBangladeshiTakaSign} className='!w-15 !h-15 p-4' />
          <p className='text-3xl font-semibold p-4 place-self-center'>My orders</p>
        </div>
        <div className='w-[48%] bg-[var(--primary)] flex flex-nowrap justify-center items-center gap-10 p-5 py-20 rounded-2xl shadow-[0px_0px_20px_1px_gray] transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>
          <FontAwesomeIcon icon={faBoxesAlt} className='!w-15 !h-15 p-4' />
          <p className='text-3xl font-semibold p-4 place-self-center'>Track Order</p>
        </div>
        <div className='w-[48%] bg-[var(--primary)] flex flex-nowrap justify-center items-center gap-10 p-5 py-20 rounded-2xl shadow-[0px_0px_20px_1px_gray] transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>
          <FontAwesomeIcon icon={faHandsHelping} className='!w-15 !h-15 p-4' />
          <p className='text-3xl font-semibold p-4 place-self-center'>Contact Support</p>
        </div>
      </div>
    </div>
  )
}

export default page