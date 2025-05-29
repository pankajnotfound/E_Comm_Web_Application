import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full h-fit p-40 bg-[var(--secondary)] flex flex-col gap-10 justify-center items-center '>
        <div className='w-full flex gap-4 justify-center items-center '>
            <input type="text" placeholder='Search.....' className='w-[70%] h-full text-xl p-2 outline-1 rounded' />
            <button className='w-fit p-2 bg-[var(--primary)] rounded text-xl font-semibold px-4 transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>GO</button>
        </div>
        <div className='w-full flex flex-wrap gap-10'>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
            <div className='w-fit bg-[var(--third)] text-white flex flex-col gap-1 rounded overflow-hidden '>
                <Image src='/resources/slideravatar3.png' alt='' width={1000} height={1000} className='w-65 ' />
                <div>
                    <p className='p-2 text-lg'>Vendor Name</p>
                    <p className='p-2 text-lg'>Product Name</p>
                    <p className='p-2 text-lg'>654.99/- Rs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page