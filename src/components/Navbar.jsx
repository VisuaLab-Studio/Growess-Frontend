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
      className="p-6 max-[599px]:p-4 w-full fixed top-0 left-0 z-20"
    >
      <nav className="w-full px-14 max-[599px]:px-6 py-6 rounded-4xl bg-[#F2FF82] flex items-center justify-between">
        <div className="logo text-3xl max-[599px]:text-xl leading-none font-bold uppercase">
          Growess
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
          className={`max-[599px]:block hidden absolute top-full left-0 w-full bg-[#F2FF82] p-4 rounded-b-4xl transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href="#"
                className="text-black font-bold text-lg uppercase"
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
