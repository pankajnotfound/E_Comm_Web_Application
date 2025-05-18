'use client';
import React from 'react'
import 'swiper/css';
import HeroSlider from './HeroSlider';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <div className='z-0 w-screen p-15 h-fit flex border-b-1 border-gray-400'>
        <HeroSlider />
        <HeroText />
    </div>
  )
}

export default Hero