import React from 'react'
import HeaderLogo from '../header/HeaderLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Footerleft from './Footerleft'
import FooterRight from './FooterRight'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='w-full relative bottom-0 p-10 h-fit flex flex-col gap-10 items-center bg-linear-to-b from-[var(--secondary)] to-[var(--highlight)]'>
      <div className='flex items-center '>
        <Footerleft />
        <FooterRight />
      </div>
      <FooterBottom />
      
    </div>
  )
}

export default Footer