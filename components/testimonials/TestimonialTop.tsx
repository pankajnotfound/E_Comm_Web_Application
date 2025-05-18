import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const TestimonialTop = () => {
  return (
    <div>
        <div className='flex flex-col gap-5'>
            <div className='text-[#784afe] text-center'>
                Testimonials
            </div>
            <div className='text-5xl font-bold text-center'>
                Users feedback
            </div>
        </div>
        <TestimonialSlider />
    </div>
  )
}

export default TestimonialTop