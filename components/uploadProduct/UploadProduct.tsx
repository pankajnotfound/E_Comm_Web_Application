'use client';
import { useSession } from '@/app/userSession/session';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Uploadproduct = () => {


  const { userRole, userId } = useSession();
  console.log('user id in upload is', userId);
  console.log('user Role in upload is', userRole);


  const [ formData, setFormData] = useState({
    name :'',
    image :'/resources/defaultProduct.png',
    description : '',
    price : '',
    quantity: '',
    category :'',
    vendorId : userId,
  })

  const [status, setStatus] = useState(false);

  const fieldUpdate = (e:any) => {
    setFormData(prev => ({...prev, [e.target.name] : e.target.value }));
    setFormData(prev => ({...prev, vendorId : userId }));
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/uploadimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setFormData((prev) => ({ ...prev, image: data.filePath }));
    } else {
      console.error("Image upload failed:", data);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, vendorId: userId }));
    console.log("form data after submit",formData);

    const submitData = await fetch('/api/uploadproduct', 
      {method: 'POST',
      headers:{"Content-Type" : "application/json",}, 
      body : JSON.stringify(formData),
    })
    
    const result = submitData;
    if(result.status == 201){
      setStatus(true)
      setFormData({
        name :'',
        image :'',
        description : '',
        price : '',
        quantity: '',
        category :'',
        vendorId : userId,
      })
    }
    
    console.log(result);
    
  } 


  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center '>
      {userRole == 'vendor' ? 
      <form onSubmit={handleSubmit} className='w-full p-10 flex justify-center items-center gap-20'>
      {status ? 
        <div className='z-10 w-fit h-fit flex flex-col justify-center items-center absolute'>
          <div onClick={()=>{setStatus(false)}} className='relative place-self-end'>
            <FontAwesomeIcon icon={faX} className='!w-10 !h-4 p-5 absolute top-0 right-0 text-red-600 rounded hover:bg-black/20' />
          </div>
          <p className='w-fit h-fit px-10 py-30 text-3xl font-bold rounded-xl bg-[var(--secondary)] shadow-[0px_0px_20px_1px_black]'> 
            Product Uploaded Successfully
          </p>
        </div> 
        : ''}
        <div className='w-fit flex justify-center items-center p-4 '>
          <Image src='/resources/uploadproduct.png' alt='' width={1000} height={1000} className='w-150 rounded-2xl' />
        </div>
        <div className='w-fit min-w-[30vw] flex flex-col gap-5'>
          <p className='text-3xl font-bold'>UPLOAD YOUR PRODUCT</p>
          <input required onChange={fieldUpdate} type="text" name='name' value={formData.name} placeholder='Product Name' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
          <input onChange={handleImageUpload} type="file" name='image' placeholder='Upload' className='text-lg p-1 file:p-1 file:bg-[#d16ec6] file:text-white file:outline-1 outline-black file:rounded focus:file:outline-[#d16ec6] ' />
          <textarea required onChange={fieldUpdate} name="description" value={formData.description} id="" placeholder='Product Description' className='min-h-10 max-h-40 overflow-auto text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6]' ></textarea>
          <input required onChange={fieldUpdate} type="text" name='price' value={formData.price} placeholder='Price per product' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
          <input required onChange={fieldUpdate} type="text" name='quantity' value={formData.quantity} placeholder='Quantity' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
          <input required onChange={fieldUpdate} type="text" name='category' value={formData.category} placeholder='Category' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
          <button type='submit' className='w-fit px-5 py-2 text-lg font-semibold bg-[#d16ec6] rounded cursor-pointer text-white self-center' >
            Submit
          </button>
        </div>
      </form>
      :
      <div className='w-full flex justify-center items-center text-3xl font-semibold gap-5'>
        <p>You Need to Be a Vendor to Upload Product.</p>
        <Link href='/becomevendor' className='text-[var(--primary)] hover:text-[var(--third)] '>Become a Vendor?</Link>
      </div>
      }
      
    </div>
    
  )
}

export default Uploadproduct