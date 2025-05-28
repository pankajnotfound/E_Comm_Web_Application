'use client';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSession } from '../userSession/session';


const page = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const fieldUpdate = (e:any) => {
    setFormData(prev => ({...prev, [e.target.name] : e.target.value }));
  }

  const { setUserId, setLoggedIn, setUserName } = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);

    const submitData = await fetch('/api/login', 
      {method: 'POST',
      headers:{"Content-Type" : "application/json",}, 
      body : JSON.stringify(formData),
    })

    const loginResponse = await submitData.json()
    
    if(submitData.status == 401 ){
      alert(loginResponse.message);
    }

    if(submitData.status == 200){
      setUserId(loginResponse.userId);
      setLoggedIn(true);
      setUserName(loginResponse.userName);
    }
  }
    



  return (
    <div className='w-screen h-screen flex justify-center items-center bg-linear-to-tl from-[var(--third)] to-[var(--text_color)] '>
      <div className='w-[60%] h-[70%] flex bg-white rounded-xl shadow-[0px_0px_20px_5px_gray] '>
        <div className='w-[50%] h-full flex-col flex justify-center items-center gap-5 border-r-1 border-gray-400'>
          <Link href='/' className='flex justify-center items-center gap-1 text-black  '>
            <FontAwesomeIcon icon={ faArrowRightArrowLeft} className='!w-6 -rotate-45 '/>
            <p className='w-fit h-fit text-3xl pb-3 italic'>TRADE.CONN</p>
          </Link>
          <p className='text-xl text-[var(--text_color)] font-semibold'>EMPOWER YOUR BUSINESS TODAY</p>
        </div>
        <form onSubmit={handleSubmit} className='w-[50%] flex flex-col justify-center items-center p-4 gap-5'>
          <p className='text-3xl font-semibold pb-5'>Login</p>
          <input onChange={fieldUpdate} type="text" name='email' required placeholder='E-mail' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <input onChange={fieldUpdate} type="text" name='password' required placeholder='Password' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <button type='submit' className='w-[80%] h-15 bg-[var(--primary)] text-white text-2xl rounded-lg ' >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page