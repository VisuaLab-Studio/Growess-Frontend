import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useRef, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const progressObj = { val: 0 };

    // Circle animation
    tl.fromTo(
      ".circle",
      { scale: 0.3 },
      {
        scale: 5,
        duration: 4,
        ease: "power4.inOut",
      }
    );

    // Progress animation (corrected)
    tl.fromTo(
      progressObj,
      { val: 0 },
      {
        val: 100,
        duration: 3,
        ease: "power4.inOut",
        onUpdate: () => {
          setProgress(Math.floor(progressObj.val));
        },
        onComplete: () => {
          gsap.to(".loader", {
            opacity: 0,
            duration: 1,
            ease: "power4.inOut",
          });
        },
      },
      0
    );
  }, []);

  return (
    <div className="loader w-full h-screen fixed top-0 left-0 bg-white cursor-progress pointer-events-none flex items-center justify-center overflow-hidden z-50">
      <div className="circle w-96 h-96 rounded-full bg-[#F2FF82]"></div>
      <h1
        ref={progressRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#000F41] text-4xl font-bold"
      >
        {progress}%
      </h1>
    </div>
  );
};

export default Loader;
