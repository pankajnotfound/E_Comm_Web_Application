'use client';
import { useSession } from '@/app/userSession/session';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type productType = {
    id: number,
}

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};

const ProductPage = ({id}:productType) => {

    const { userId } = useSession();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [data, setData] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [err, setErr] = useState('');
    const [price, setPrice] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await fetch(`/api/getproduct`,
                {method: 'POST',
                headers:{"Content-Type" : "application/json",}, 
                body : JSON.stringify({id}),
                });
            console.log(JSON.stringify(id));
            const details = await product.json();
            setData(details.product);
            setTotalPrice(quantity * details.product.price)
            setPrice(details.product.price)
        }
        fetchProduct();        
    }, []);

    useEffect(() => {
        const total = quantity * price;
        setTotalPrice(total);
    }, [quantity]);

    if (!data){
        return <div className='p-40'>Loading product...</div>;
    } 

    const quantityUpdate = (e:any) => {
        const inputVal = parseInt(e.target.value);

        if (isNaN(inputVal) || inputVal <= 0) {
        setQuantity(1);
        setErr('Quantity must be a positive number');
        return;
        }

        if (inputVal > data.quantity) {
        setErr(`Quantity must be less than or equal to ${data.quantity}`);
        setQuantity(inputVal);
        } else {
        setErr('');
        setQuantity(inputVal);
        }
    }

    const handleOrder = async () => {
        if (err) return;
        const orderDetails = {
            productId: id,
            productName: data.name,
            productImage: data.image,
            quantity: quantity,
            price: totalPrice,
            status: 'Active',
            position: 'Order Placed',
            userId: userId, 
        }

        console.log('order detail data', orderDetails)

        const placeOrder = await fetch('/api/placeorder',
            {method: 'POST',
            headers:{"Content-Type" : "application/json",}, 
            body : JSON.stringify(orderDetails),
            });
        const response = placeOrder.json();
        console.log('order response:', response);

        if(placeOrder.status == 201){
            setOrderPlaced(true);
        }
    }

    return (
      <div className='w-full h-full px-20 pt-40 pb-20 flex justify-center items-center gap-10 '>
        {orderPlaced?
        <div className=' z-1 w-full h-full absolute flex justify-center items-center bg-black/50   '>
            <div className='w-fit h-fit bg-white p-20 rounded-xl flex flex-col justify-center items-center shadow-[0px_0px_80px_0.1px_black] gap-30'>
                <p className='text-4xl font-semibold text-[var(--primary)] '>Congratulations....... Order Placed</p>
                <button onClick={() => {window.location.reload();}} className='py-4 px-8 text-xl bg-[var(--primary)] text-white rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[var(--third)] '>OK</button>
            </div>
        </div>
        :
        ''
        }
        
          <div className='max-w-[40%] w-full'>
              <Image src={data.image} alt='' width={1000} height={1000} className='w-full h-full rounded ' />
          </div>
          <div className=' max-w-[50%] w-full h-fit flex flex-col gap-10 justify-center items-start'>
              <p className='text-6xl font-semibold'>{data.name}</p>
              <p className='text-lg'>Description : {data.description}</p>
              <p className='text-2xl'>Price : {data.price}/- RS</p>
              <p className='text-2xl'>Quantity Available : {data.quantity}</p>
              <div className='flex gap-2 justify-start items-center'>
                  <label htmlFor="amount">Amount to Order - </label>
                  <input onChange={quantityUpdate} value={quantity} min={1} max={data.quantity} type="number" name='amount' id='amount' placeholder='Amount (By default 1)' className='outline-1 rounded p-2 px-4' />
              </div>
              <div className='w-full flex justify-center items-center gap-20 text-lg'>
                <p>Total Anmount to be paid : {totalPrice}</p>
                <button disabled={!!err}  onClick={handleOrder} className={`w-fit p-2 text-lg rounded-lg text-white transition-all duration-300 ease-in-out ${err ? 'bg-gray-400 cursor-not-allowed' : ' cursor-pointer bg-[var(--primary)] hover:bg-[var(--third)] hover:translate-x-1'} `}>Place Order</button>
              </div>
          </div>
      </div>
    )
}

export default ProductPage