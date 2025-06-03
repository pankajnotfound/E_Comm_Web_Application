import Image from 'next/image'
import React from 'react'

type propsType = {
    orderDetail: {
        id: number,
        productName: string,
        productImage: string,
        quantity: number,
        price: number,
        status: string,
        position: string,
        userId: number,
    }
}

const ReceivedOrders = (props: propsType) => {
  return (
    <div
      className={`w-full max-w-4xl p-5 gap-6 items-center border border-gray-200 rounded-lg bg-white shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] ${
        props.orderDetail.status === 'Received' ? 'flex flex-col md:flex-row' : 'hidden'
      }`}
    >
      <Image
        src={props.orderDetail.productImage}
        alt={props.orderDetail.productName}
        width={1000}
        height={1000}
        className="max-w-[200px] rounded-md object-contain"
      />

      <div className="flex-1 flex flex-col justify-center gap-4">
        <p className="text-2xl font-bold text-blue-800">{props.orderDetail.productName}</p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Quantity:</span> {props.orderDetail.quantity}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Total Price:</span> ₹{props.orderDetail.price}
        </p>

        <div className="mt-2">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold tracking-wide bg-green-100 text-green-700"
          >
            {props.orderDetail.status}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ReceivedOrders