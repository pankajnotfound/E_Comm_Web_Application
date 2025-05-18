import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const HeaderLogo = () => {
  return (
    <Link href='/' className='flex gap-1 text-black  '>
      <FontAwesomeIcon icon={ faArrowRightArrowLeft} className='pt-3 w-6 -rotate-45 '/>
      <p className='w-fit h-fit text-2xl pb-3 italic'>TRADE.CONN</p>
    </Link>
  )
}

export default HeaderLogo