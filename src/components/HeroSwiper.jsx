import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSwiper = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Pagination, Autoplay, EffectCoverflow]}
      className="mySwiper left h-full max-[599px]:h-1/2 w-[68%] max-[599px]:w-full will-change-transform"
    >
      <SwiperSlide>
        <div className="slide-1 w-full h-full flex items-start justify-between flex-col bg-[#F2FF82] px-14 max-[599px]:px-4 py-8 max-[599px]:py-6 rounded-[40px] max-[599px]:rounded-2xl text-[#000F41]">
          <div className="main-text">
            <h1 className="font-bold text-[4.8vw] max-[599px]:text-[6vw] leading-[.9] tracking-tight">
              Elevate Your Brand to New Heights with Growess Group
            </h1>
            <p className="text-[1.9vw] max-[599px]:text-[2.5vw] font-bold leading-none tracking-tight mt-4">
              Schedule Your Free Brand Strategy Session Today!
            </p>
          </div>
          <p className="text-black text-[1.5vw] max-[599px]:text-[2vw] font-bold leading-none tracking-tight">
            This approach combines a clear value proposition with an actionable
            CTA, encouraging potential clients to engage directly.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-2 w-full h-full flex items-start justify-between flex-col bg-[#F2FF82] px-14 max-[599px]:px-4 py-8 max-[599px]:py-6 rounded-[40px] max-[599px]:rounded-2xl text-[#000F41]">
          <div className="main-text">
            <h1 className="font-bold text-[4.8vw] max-[599px]:text-[6vw] leading-[.9] tracking-tight">
              Create a Lasting Impression with Our Designs
            </h1>
            <p className="text-[1.9vw] max-[599px]:text-[2.5vw] font-bold leading-none tracking-tight mt-4">
              Get Your Custom Website Design Quote Now!
            </p>
          </div>
          <p className="text-black text-[1.5vw] max-[599px]:text-[2vw] font-bold leading-none tracking-tight">
            This emphasizes the benefit of a tailored website solution,
            prompting immediate action.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-3 w-full h-full flex items-start justify-between flex-col bg-[#F2FF82] px-14 max-[599px]:px-4 py-8 max-[599px]:py-6 rounded-[40px] max-[599px]:rounded-2xl text-[#000F41]">
          <div className="main-text">
            <h1 className="font-bold text-[4.8vw] max-[599px]:text-[6vw] leading-[.9] tracking-tight">
              Find Your Next Customer with Our Expertise
            </h1>
            <p className="text-[1.9vw] max-[599px]:text-[2.5vw] font-bold leading-none tracking-tight mt-4">
              Maximize Your Sales with Our Lead Generation Strategies.
            </p>
          </div>
          <p className="text-black text-[1.5vw] max-[599px]:text-[2vw] font-bold leading-none tracking-tight">
            We providing qualified lead and high conversion ratio with our
            highly advance and AI tools.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSwiper;
