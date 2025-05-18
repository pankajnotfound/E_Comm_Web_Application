import React from 'react'
import Hero from '../../components/hero/Hero'
import TrustedMain from '../../components/trusted/TrustedMain'
import Features from '../../components/features/Features'
import Testimonials from '../../components/testimonials/Testimonials'

const page = () => {
  return (
    <div className='w-full h-auto bg-[var(--secondary)] overflow-hidden'>
      <Hero />
      <TrustedMain />
      <Features />
      <Testimonials />
    </div>
  )
}

export default page