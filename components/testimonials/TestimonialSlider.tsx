'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react'
import {faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import SliderProfile from './SliderProfile';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';

const TestimonialSlider = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className='flex gap-5 justify-center pt-20' >
        <FontAwesomeIcon icon={faQuoteLeft} className='hidden !w-40 !h-75 lg:flex' />
        <div className=' w-screen md:w-180 lg:w-120 sxl:w-200'>
            <Swiper
            modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={120}
                loop={true}
                autoplay={{
                    delay:4000
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex justify-center items-center'
            >
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div className='flex gap-2 justify-center items-center'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <p>Verified Buyers</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                        </div>
                        <p className='w-full px-5 text-2xl text-center font-bold sxl:px-25'>"The platform simplified our bulk ordering process. We now manage procurement for 3 regional offices with zero delays and real-time tracking. A total game-changer!"</p>
                        <SliderProfile image='/resources/slideravatar1.png' name='ROHAN MEHTA' address='Elite InfraTech Pvt. Ltd.' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div className='flex gap-2 justify-center items-center'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <p>Verified Buyers</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                        </div>
                        <p className='w-full px-5 text-2xl text-center font-bold sxl:px-25'>"Great selection of verified vendors and transparent pricing. The support team helped us integrate with our existing ERP system effortlessly."</p>
                        <SliderProfile image='/resources/slideravatar2.png' name='JULIA RAMOS' address='Nordic Biotech Solutions ' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div className='flex gap-2 justify-center items-center'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <p>Verified Vendors</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                        </div>
                        <p className='w-full px-5 text-2xl text-center font-bold sxl:px-25'>"Reliable B2B marketplace with serious buyers. We've expanded to international clients thanks to the visibility and logistics support built into the platform."</p>
                        <SliderProfile image='/resources/slideravatar3.png' name='ARVIND KEJRIWAL' address='Kejruddin Industrial Supplies' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div className='flex gap-2 justify-center items-center'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <p>Verified Vendors</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                        </div>
                        <p className='w-full px-5 text-2xl text-center font-bold sxl:px-25'>"Since joining the platform, our monthly B2B leads have doubled. The dashboard makes it easy to track orders, invoices, and client queries in one place."</p>
                        <SliderProfile image='/resources/slideravatar4.png' name='LINDA CHEN' address='Nordic Biotech Solutions ' />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
        <FontAwesomeIcon icon={faQuoteRight} className='hidden !w-40 !h-75 lg:flex' />
    </motion.div>
  )
}

export default TestimonialSlider