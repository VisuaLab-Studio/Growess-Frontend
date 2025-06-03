import gsap from "gsap";
import React, { useRef, useState } from "react";
import HeroSwiper from "../../components/heroSwiper";
import HeroForm from "../../components/HeroForm";

const Hero = () => {
  const scale = useRef(null);
  const closebtn = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  const popupContainer = useRef(null);
  const closeButton = useRef(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      gsap
        .timeline()
        .set(scale.current, {
          position: "fixed",
          padding: "12px",
          borderRadius: "40px",
          overflow: "hidden",
          cursor: "default",
        })
        .fromTo(
          scale.current,
          { width: "100%", height: "100%" },
          {
            width: "100vw",
            height: "100vh",
            duration: 0.6,
            ease: "power4.inOut",
          },
          "a"
        )
        .fromTo(
          closebtn.current,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 1, pointerEvents: "auto", ease: "none" },
          "a"
        );
    });

    mm.add("(max-width: 799px)", () => {
      gsap
        .timeline()
        .set(scale.current, {
          position: "fixed",
          padding: "8px",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "default",
        })
        .fromTo(
          scale.current,
          { width: "100%", height: "100%" },
          {
            width: "100vw",
            height: "100vh",
            duration: 0.6,
            ease: "power4.inOut",
          },
          "a"
        )
        .fromTo(
          closebtn.current,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 1, pointerEvents: "auto", ease: "none" },
          "a"
        );
    });

    setisOpen(true);
  };

  const handleClose = () => {
    if (!isOpen) return;

    gsap
      .timeline()
      .fromTo(
        closebtn.current,
        { opacity: 1, pointerEvents: "auto" },
        {
          opacity: 0,
          pointerEvents: "none",
          ease: "none",
        },
        "b"
      )
      .fromTo(
        scale.current,
        { width: "100vw", height: "100vh" },
        {
          width: "100%",
          height: "100%",
          duration: 0.6,
          ease: "power4.inOut",
        },
        "b"
      )
      .set(
        scale.current,
        {
          position: "static",
          padding: "0px",
          cursor: "pointer",
        },
        "-=0.1"
      );

    setisOpen(false);
  };

  const openPopup = () => {
    if (popupVisible) return;

    gsap
      .timeline()
      .set(popupContainer.current, {
        opacity: 0,
        scale: 0,
        pointerEvents: "none",
      })
      .to(
        popupContainer.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power4.out",
          pointerEvents: "auto",
        },
        "a"
      )
      .to(
        closeButton.current,
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.3,
          ease: "power1.out",
        },
        "a"
      );

    setPopupVisible(true);
  };

  const closePopup = () => {
    if (!popupVisible) return;

    gsap
      .timeline()
      .to(
        closeButton.current,
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
          ease: "power1.in",
        },
        "b"
      )
      .to(
        popupContainer.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: "power4.in",
          pointerEvents: "none",
        },
        "b"
      );

    setPopupVisible(false);
  };

  return (
    <section className="w-full h-screen p-3 pt-25 max-[599px]:pt-20 max-[599px]:p-2 flex items-center justify-center max-[599px]:flex-col gap-3 max-[599px]:gap-2">
      <HeroSwiper />
      <div className="right h-full max-[599px]:h-1/2 w-[32%] max-[599px]:w-full flex items-end justify-between flex-col gap-3 max-[599px]:gap-2">
        <div
          onClick={handleOpen}
          className="box w-full h-[57%] rounded-[40px] max-[599px]:rounded-2xl overflow-hidden relative cursor-pointer"
        >
          <div
            ref={scale}
            className="w-full h-full top-0 left-0 z-[99] transition-all duration-500 will-change-transform"
          >
            <img
              className="w-full h-full object-cover rounded-[40px] max-[599px]:rounded-2xl"
              src="https://res.cloudinary.com/dq6btiqs0/image/upload/v1748851358/grow-hero_efvuhi.png"
              alt=""
            />
            <div
              ref={closebtn}
              onClick={handleClose}
              className="h-16 max-[599px]:h-10 aspect-square opacity-0 pointer-events-none cursor-pointer will-change-transform rounded-full bg-white/50 backdrop-blur-sm absolute top-10 max-[599px]:top-5 right-10 max-[599px]:right-5 z-50"
            >
              <div className="w-full h-full flex items-center justify-center text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={openPopup}
          className="circ h-[43%] aspect-square bg-[#000F41] rounded-full cursor-pointer flex items-center justify-center text-white text-[1.8vw] max-[599px]:text-[3.5vw] font-bold uppercase z-50"
        >
          <h4>Contact</h4>
          <svg
            className="w-10 h-10 max-[599px]:w-5"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="60,40 60,160 160,100" fill="white" />
          </svg>
        </div>

        <div className="fixed bottom-0 left-0 z-40 pointer-events-none p-3 max-[599px]:p-2 w-full h-[89%]">
          <div
            ref={popupContainer}
            className="w-full h-full bg-[#F2FF82] rounded-[40px] will-change-transform rounded-br-[140px] max-[599px]:rounded-br-[70px] opacity-0 pointer-events-none scale-0 origin-bottom-right overflow-hidden"
          >
            <HeroForm />
            <div
              ref={closeButton}
              onClick={closePopup}
              className="h-16 max-[599px]:h-10 aspect-square opacity-0 cursor-pointer will-change-transform rounded-full bg-black/50 backdrop-blur-sm absolute top-5 max-[599px]:top-2 right-5 max-[599px]:right-2 z-50"
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
