import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import cookieImg from '../../assets/images/product_1.png';
import heroChocolate from '../../assets/icons/hero_choclate.png';
import { fadeIn } from '../../utils/animations';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      const anim = fadeIn(heroRef.current, { duration: 1.2, delay: 0.1 });
      return () => anim?.kill?.();
    }
  }, []);

  return (
    <section className="relative bg-brand-brown text-surface pt-24 sm:pt-12 md:pt-16 pb-12 md:pb-12 overflow-hidden">
      <div ref={heroRef} className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        {/* Giant Frookies Wordmark with Central 180° Rotated Cookie */}
        <div className="relative flex items-center justify-center my-6 md:my-10 select-none">

          {/* Left Text: "Fro" with Berlin Sans FB Demi font */}
          <span
            className="relative z-11 -mr-11 md:-mr-30 lg:-mr-36 text-[100px] sm:text-[200px] md:text-[210px] lg:text-[300px] font-bold tracking-tight text-surface leading-none font-berlin drop-shadow-md"
            style={{ fontFamily: "'Berlin Sans FB Demi', 'Berlin Sans FB', sans-serif" }}
          >
            Fro
          </span>

          {/* Center: Cookie Container with 180° Rotation and floating chocolate pieces */}
          <div className="relative mx-1 sm:mx-3 md:mx-4 flex items-center justify-center">
            {/* Chocolate splash / flying pieces effect in background */}
            <img
              src={heroChocolate}
              alt="Chocolate pieces"
              className="absolute top-0 -left-4 sm:-top-28 sm:-left-8 md:top-1 md:-left-8 w-24 sm:w-52 md:w-60 lg:w-72 h-auto pointer-events-none opacity-100 z-10"
            />

            <img
              src={heroChocolate}
              alt="Chocolate pieces"
              className="absolute top-7 left-5 sm:-top-32 sm:left-32 md:top-32 md:left-24 w-24 sm:w-52 md:w-60 lg:w-72 h-auto pointer-events-none opacity-100 z-10"
            />



            {/* Central Giant Cookie - Rotated 180 degrees per user requirement */}
            <div className="relative z-10 w-28 h-28 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <img
                src={cookieImg}
                alt="Signature Frookie"
                className="w-full h-full object-contain filter drop-shadow-2xl rotate-180 transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Text: "kies" with Berlin Sans FB Demi font */}
          <span
            className="-ml-13 md:-ml-30 lg:-ml-36 text-[100px] sm:text-[200px] md:text-[210px] lg:text-[300px] font-bold tracking-tight text-surface leading-none font-berlin drop-shadow-md"
            style={{ fontFamily: "'Berlin Sans FB Demi', 'Berlin Sans FB', sans-serif" }}
          >
            kies
          </span>
        </div>

        {/* Action Button: Order Now */}
        <div className="mt-4 md:mt-6 z-20">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-surface font-medium text-sm sm:text-base px-8 py-3 rounded-full shadow-lg hover:shadow-brand-dark/40 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Order Now</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}