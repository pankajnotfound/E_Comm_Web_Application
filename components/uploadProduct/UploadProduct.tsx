import Image from 'next/image'
import React from 'react'

const Uploadproduct = () => {
  return (
    <form className='w-full p-10 flex justify-center items-center gap-20'>
      <div className='w-fit flex justify-center items-center p-4 '>
        <Image src='/resources/uploadproduct.png' alt='' width={1000} height={1000} className='w-150 rounded-2xl' />
      </div>
      <div className='w-fit min-w-[30vw] flex flex-col gap-5'>
        <p className='text-3xl font-bold'>UPLOAD YOUR PRODUCT</p>
        <input required type="text" placeholder='Product Name' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
        <input required type="file" placeholder='Upload' className='text-lg p-1 file:p-1 file:bg-[#d16ec6] file:text-white file:outline-1 outline-black file:rounded focus:file:outline-[#d16ec6] ' />
        <textarea required name="" id="" placeholder='Product Description' className='min-h-10 max-h-40 overflow-auto text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6]' ></textarea>
        <input required type="text" placeholder='Price per product' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
        <input required type="text" placeholder='Quantity' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
        <input required type="text" placeholder='Category' className='text-lg pl-4 outline-1 outline-black rounded focus:outline-[#d16ec6] ' />
        <button type='submit' className='w-fit px-5 py-2 text-lg font-semibold bg-[#d16ec6] rounded text-white self-center' >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Uploadproduct