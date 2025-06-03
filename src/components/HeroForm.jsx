import gsap from "gsap";
import React, { useEffect, useState } from "react";

const HeroForm = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".fade",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div className="fade contact h-full w-full flex max-[599px]:flex-col items-center justify-start absolute top-0 left-0 z-50 overflow-hidden">
      <div className="flex flex-col max-[599px]:w-full w-[50%] h-[93vh] justify-start p-10 max-[599px]:p-4">
        {/* Heading */}
        <div className="text-black flex flex-col items-center justify-center">
          <h1 className="font-[neue5] text-9xl max-[599px]:text-5xl max-[1024px]:text-6xl uppercase">
            Get In
          </h1>
          <h1 className="font-[sloop] text-9xl max-[599px]:text-5xl max-[1024px]:text-5xl leading-none translate-x-30 max-[599px]:translate-x-10 max-[599px]:mb-6">
            Touch
          </h1>
        </div>

        {/* Form */}
        <form className="text-black space-y-6 max-[599px]:space-y-2 w-full font-[neue4]">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-[599px]:gap-2">
            {/* Name */}
            <div className="relative ">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full bg-transparent border border-black p-4 pt-5 pb-4 text-[#FFFFFF] focus:outline-none focus:border-black"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 max-[1024px]:text-sm  -translate-y-1/2 text-black text-base transition-all duration-300 ease-in-out
          peer-focus:-top-[1px]  peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-black
          px-3"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full bg-transparent border border-black p-4 pt-5 pb-4 text-black focus:outline-none focus:border-black"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 max-[1024px]:text-xs -translate-y-1/2 text-black text-base transition-all duration-300 ease-in-out
          peer-focus:-top-[1px] max-[599px]:text-sm peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-black
          px-3"
              >
                Your email address
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              placeholder=" "
              rows="4"
              className="peer w-full bg-transparent border border-black p-4 pt-5 pb-2 text-black focus:outline-none focus:border-black"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 max-[1024px]:text-sm  top-2 text-zinc-700 text-base transition-all duration-300 ease-in-out
        peer-focus:-top-[1px]  peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-black
        px-3"
            >
              What can i help you with?
            </label>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="privacy"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="appearance-none w-5 h-5 rounded-full border-2 border-black checked:bg-black checked:border-black cursor-pointer transition-all duration-200"
              required
            />
            <label htmlFor="privacy" className="text-2xl max-[599px]:text-sm text-black">
              I’ve accepted the{" "}
              <a
                href="#"
                className="relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              >
                privacy policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!accepted}
            className="py-4 max-[599px]:text-sm rounded-full uppercase hover:text-white hover:bg-black cursor-pointer font-semibold transition border px-10 max-[599px]:px-6 border-black"
          >
            Submit Message
          </button>
        </form>
      </div>

      {/* Right: Image placeholder */}
      <div className="max-[599px]:w-full w-[50%] h-full relative overflow-hidden p-20 max-[599px]:hidden">
        <img
          className="object-c max-[599px]:w-full max-[599px]:h-full h-[100%] object-center w-full"
          src="https://res.cloudinary.com/dq6btiqs0/image/upload/v1748952027/hero-contact_wm9pob.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroForm;
