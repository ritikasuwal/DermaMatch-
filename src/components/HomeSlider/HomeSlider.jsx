import React, { useEffect, useRef } from 'react';
import bannerplum from "../../assets/bannerplum.webp";
import bannerderaco from "../../assets/bannerderaco.avif";
import bannerfixferma from "../../assets/bannerfixderma.webp";
// import ordinary from "../../assets/ordinary.webp";
const HomeSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const loadSwiper = async () => {
      const module = await import('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs');
      const Swiper = module.default;

      new Swiper(swiperRef.current, {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };

    loadSwiper();
  }, []);

  return (
    
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src={bannerplum} alt="" className='w-full'/></div>
          <div className="swiper-slide"><img src={bannerderaco} alt="" className='w-full'/></div>
          
          <div className="swiper-slide"><img src={bannerfixferma} alt=""className='w-full' /></div>
          
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    
  );
};

export default HomeSlider;
