"use client";

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { div } from 'framer-motion/client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



interface Product {
  id:number
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const page = () => {

    const pageLimit = 8;
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] =useState(false);
    const [noMoreContent, setNoMoreContent] = useState(false);
    const [productDetails, setProductDetail] = useState([]);

    const handlePrev = () => {
        if(currentPage > 1 ){
            setCurrentPage(currentPage - 1 );
        }
    }

    const handleNext = () => {
        if(currentPage < totalPages ){
            setCurrentPage(currentPage + 1 );
        }
        else{
            setNoMoreContent(true);
        }
    }

    const loadProduct = async () => {
        setLoading(true);
        setNoMoreContent(false);
        const skip =(currentPage - 1) * pageLimit;
        const productDetails = await fetch(`/api/getproductdetail?skip=${skip}&take=${pageLimit}`, 
        {method: 'GET',})
        const data = await productDetails.json();
        const products = data.getDetail;
        const total = data.total;
        const pages = Math.ceil(total / pageLimit);
        setTotalPages( pages);
        setProductDetail(products);
        setLoading(false);

    }
    

    useEffect(() => {
        setLoading(true);
        loadProduct()
        console.log(`curr page is ${currentPage}`);
        console.log(`loading is ${loading}`);
        return() => {
            setLoading(true);
        }
    }, [currentPage]);
    
  return (
    <div className=' w-full h-fit p-40 bg-[var(--secondary)] flex flex-col gap-10 justify-center items-center '>
        <div className='w-full flex gap-4 justify-center items-center '>
            <input type="text" placeholder='Search.....' className='w-[70%] h-full text-xl p-2 outline-1 rounded' />
            <button className='w-fit p-2 bg-[var(--primary)] rounded text-xl font-semibold px-4 transition-all duration-300 ease-in-out hover:bg-[var(--third)] hover:text-white '>GO</button>
        </div>
        {loading ? 
        <div className='text-5xl font-black pt-20 text-[var(--primary)]'>
            Please Wait, Loading......
        </div>
        :
        ''
        }
        <div className='w-full grid grid-cols-4 gap-10'>
            {productDetails.map((product:Product) => (
                <div key={product.id} className='w-fit h-fit bg-[var(--third)] text-white place-self-center flex flex-col gap-1 rounded overflow-hidden transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-[0px_0px_20px_1px_gray] '>
                    <Image src={product.image} loading='lazy' alt='' width={1000} height={1000} className='w-65 ' />
                    <div>
                        <p className='p-2 text-lg'>{product.name}</p>
                        <p className='p-2 text-lg'>{`${product.price}/- Rs`}</p>
                        <p className='p-2 text-lg'>{`Quantity- ${product.quantity}`}</p>
                    </div>
                </div>
            ))}
        </div>
        {noMoreContent ? 
        <div className='text-5xl font-black pt-20 text-[var(--primary)]'>
            No More Products.......
        </div>
        :
        ''
        }
        
        <div className='w-full flex justify-between items-center p-5'>
            <div onClick={handlePrev} className='flex gap-2 p-3 bg-[var(--primary)] justify-center items-center cursor-pointer rounded transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faArrowLeft} className='!w-4 !h-4' />
                <p className='text-lg font-semibold '>Previous Page</p>
            </div>
            <div>
                <p className='text-lg'>{`${currentPage}/${totalPages}`}</p>
            </div>
            <div onClick={handleNext} className='flex gap-2 p-3 bg-[var(--primary)] justify-center items-center cursor-pointer rounded transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <p className='text-lg font-semibold '>Next Page</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4' />
            </div>
        </div>
    </div>
  )
}

export default page