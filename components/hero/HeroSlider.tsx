import Image from 'next/image'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HeroSlider = () => {
  return (
    <div className=' w-[60%] rounded overflow-hidden'>
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            loop={true}
            slidesPerView={1}
            autoplay 
            >
            <SwiperSlide>
                <Image src='/resources/carousel1.png' alt=''  width={1000} height={1000} className='w-full'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/resources/carousel2.png' alt=''  width={1000} height={1000} className='w-full'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/resources/carousel3.png' alt=''  width={1000} height={1000} className='w-full'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/resources/carousel5.png' alt=''  width={1000} height={1000} className='w-full'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default HeroSlider