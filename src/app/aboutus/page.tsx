import React from 'react'
import Hero from '../../../components/aboutUs/Hero'
import WhatWeDo from '../../../components/aboutUs/WhatWeDo'
import Contact from '../../../components/aboutUs/Contact'

const page = () => {
  return (
    <div className='w-full bg-white flex flex-col justify-center items-center gap-10 pt-20'>
        <Hero />
        <WhatWeDo />
        <Contact />
    </div>
  )
}

export default page