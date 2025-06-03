import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navLinks = ["Home", "About Us", "Pricing", "Career", "Services"];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll Down – Hide Navbar
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Scroll Up – Show Navbar
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className="p-3 max-[599px]:p-2 w-full fixed top-0 left-0 z-20"
    >
      <nav className="w-full px-14 max-[599px]:px-4 py-2 rounded-full max-[599px]:rounded-2xl bg-[#F2FF82] flex items-center justify-between">
        <div className="logo w-[12.5%] max-[599px]:w-[40%] overflow-hidden">
          <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dq6btiqs0/image/upload/v1748851356/Logo_ifdy2m.svg" alt="" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="max-[599px]:block hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="links max-[599px]:hidden flex gap-10">
          {navLinks.map((link, index) => (
            <a
              href="#"
              className="text-black font-bold text-[1.05vw] uppercase"
              key={index}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`max-[599px]:block hidden absolute top-[70%] left-1/2 -z-10 -translate-x-1/2 w-[95%] h-[45vh] bg-[#F2FF82] p-4 pt-10 rounded-b-4xl transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href="#"
                className="text-black font-bold text-2xl uppercase"
                key={index}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
