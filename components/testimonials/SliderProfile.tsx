import Image from 'next/image'
import React from 'react'

type propsType ={
    image : string;
    name : string;
    address : string;
}

const SliderProfile = (props : propsType) => {
  return (
    <div className='flex gap-2 p-2 justify-center items-center'>
        <div className='w-12 h-12  rounded-full '>
            <Image src={props.image} alt='' width={100} height={100} className=' rounded-full' />
        </div>
        <div className='flex flex-col text-sm p-1 gap-1 text-start'>
            <p className='font-semibold'> {props.name} </p>
            <p className='text-gray-500'> {props.address} </p>
        </div>
    </div>
  )
}

export default SliderProfile