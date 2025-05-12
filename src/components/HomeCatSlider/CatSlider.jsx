
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import first from '../../assets/sunscreen.png'
import second from '../../assets/5952382.png'
import third from '../../assets/VC.jpg'

import { Navigation } from 'swiper/modules';
const CatSlider = () => {
  return (
    <div className='homeCatSlider'>
     <div className="container">
<Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={second}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Face Mask</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={third}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Vitamin C Serum</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center
           flex-col ">
           <img src={first}alt="" className='w-[60px]'/>
           <h3 className='text-[15px] font-[500] mt-3'>Sunscreen</h3>
          </div>
</Link>
        </SwiperSlide>
       
      </Swiper>
      </div>

</div>    
  )
}

export default CatSlider
