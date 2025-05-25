import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <section className="w-full h-screen p-6 mt-24 max-[599px]:mt-20 flex items-center justify-center max-[599px]:flex-col gap-4">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper left h-full w-[70%] max-[599px]:w-full"
      >
        <SwiperSlide>
          <div className="slide-1 w-full h-full flex items-start justify-between flex-col bg-[#F2FF82] px-14 max-[599px]:px-6 py-8 max-[599px]:py-6 rounded-4xl text-[#000F41]">
            <div className="main-text">
              <h1 className="font-bold text-[4.7vw] max-[599px]:text-[6vw] leading-none tracking-tight">
                Elevate Your Brand to New Heights with Growess Group
              </h1>
              <p className="text-[1.9vw] max-[599px]:text-[2.5vw] font-bold leading-none tracking-tight mt-4">
                Schedule Your Free Brand Strategy Session Today!
              </p>
            </div>
            <p className="text-black text-[1.5vw] max-[599px]:text-[2vw] font-bold leading-none tracking-tight">
              This approach combines a clear value proposition with an
              actionable CTA, encouraging potential clients to engage directly.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-2 w-full h-full flex items-start justify-between flex-col bg-[#F2FF82] px-14 max-[599px]:px-6 py-8 max-[599px]:py-6 rounded-4xl text-[#000F41]">
            <div className="main-text">
              <h1 className="font-bold text-[4.7vw] max-[599px]:text-[6vw] leading-none tracking-tight">
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
          <div className="slide-3 w-full h-full flex items-start justify-between flex-col bg-[#F2FF82] px-14 max-[599px]:px-6 py-8 max-[599px]:py-6 rounded-4xl text-[#000F41]">
            <div className="main-text">
              <h1 className="font-bold text-[4.7vw] max-[599px]:text-[6vw] leading-none tracking-tight">
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
      <div className="right h-full w-[30%] max-[599px]:w-full flex items-end justify-between flex-col gap-4">
        <div className="box w-full h-1/2 bg-[#000F41] rounded-4xl"></div>
        <div className="circ w-[22rem] h-[22rem] bg-[#000F41] rounded-full flex items-center justify-center text-white text-[2vw] font-bold uppercase">
          <h4>Contact </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
