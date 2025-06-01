'use client';
import React, { useState } from 'react'
import HeaderLogo from '../../../components/header/HeaderLogo'
import { faArrowRightArrowLeft, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const page = () => {

  const [confirmPassword, setConfirmPassowrd] = useState('');

  const [ formData, setFormData] = useState({
      name :'',
      email: '',
      password :'',
      role:'user',
    })
  
    const [status, setStatus] = useState(false);
  
    const fieldUpdate = (e:any) => {
      setFormData(prev => ({...prev, [e.target.name] : e.target.value }));
    }

    const passwordValidator = (e:any) => {
      setConfirmPassowrd(e.target.value)
    }
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      console.log(formData);
      console.log(confirmPassword)
  
      if(formData.password === confirmPassword){
        const submitData = await fetch('/api/register', 
        {method: 'POST',
        headers:{"Content-Type" : "application/json",}, 
        body : JSON.stringify(formData),
        })
        
        const result = submitData;
        if(result.status == 201){
          setStatus(true)
          setFormData({
            name :'',
            email: '',
            password :'',
            role: 'user'
          })
      }
      
      console.log(result);
      
      }

      else{
        alert("Confirm Password doesn't match with the password")
      }
    } 


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-linear-to-tl from-[var(--third)] to-[var(--text_color)] '>
      {status ? 
        <div className='z-10 w-fit h-fit flex flex-col justify-center items-center absolute'>
          <div onClick={()=>{setStatus(false)}} className='relative place-self-end'>
            <FontAwesomeIcon icon={faX} className='!w-10 !h-4 p-5 absolute top-0 right-0 text-red-600 rounded hover:bg-black/20' />
          </div>
          <div className='w-fit h-fit px-10 py-30 flex space-x-1 text-3xl font-bold rounded-xl bg-[var(--secondary)] shadow-[0px_0px_20px_1px_black]'> 
            <p>Registered Successfully, Head to </p>
            <Link href='/login' className=' w-fit place-self-center text-[var(--primary)] hover:text-green-700'>Login</Link>
          </div>
        </div> 
        : ''}
      <div className='w-[60%] h-[70%] flex bg-white rounded-xl shadow-[0px_0px_20px_5px_gray] '>
        <div className='w-[50%] h-full flex-col flex justify-center items-center gap-5 border-r-1 border-gray-400'>
          <Link href='/' className='flex justify-center items-center gap-1 text-black  '>
            <FontAwesomeIcon icon={ faArrowRightArrowLeft} className='!w-6 -rotate-45 '/>
            <p className='w-fit h-fit text-3xl pb-3 italic'>TRADE.CONN</p>
          </Link>
          <p className='text-xl text-[var(--text_color)] font-semibold'>EMPOWER YOUR BUSINESS TODAY</p>
        </div>
        <form onSubmit={handleSubmit} className='w-[50%] flex flex-col justify-center items-center p-4 gap-5'>
          <p className='text-3xl font-semibold pb-5'>Register Now</p>
          <input onChange={fieldUpdate} type="text" name='name' value={formData.name} required placeholder='Username' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <input onChange={fieldUpdate} type="text" name='email' value={formData.email} required placeholder='E-mail' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <input onChange={fieldUpdate} type="password" name='password' value={formData.password} required placeholder='Password' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <input onChange={passwordValidator} type="password" value={confirmPassword} required placeholder='Confirm Password' className='w-[80%] h-10 bg-gray-100 rounded-lg p-5' />
          <button type='submit' className='w-[80%] h-15 bg-[var(--primary)] text-white text-2xl rounded-lg ' >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page