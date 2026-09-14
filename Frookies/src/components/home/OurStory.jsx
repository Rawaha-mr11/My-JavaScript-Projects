import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import aboutUsImg from '../../assets/images/about_us.jpg';
import OrangeSquiggle from '../common/OrangeSquiggle';
import { fadeInRight, fadeInBottom } from '../../utils/animations';

export default function OurStory() {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const anims = [];

    // Fade in from bottom on image
    if (imgRef.current) {
      anims.push(fadeInBottom(imgRef.current, { duration: 0.9, y: 70 }));
    }

    // Sequenced right fade-in: Title first, then paragraph, then button
    if (titleRef.current) {
      anims.push(fadeInRight(titleRef.current, { delay: 0, duration: 0.8 }));
    }
    if (descRef.current) {
      anims.push(fadeInRight(descRef.current, { delay: 0.22, duration: 0.8 }));
    }
    if (btnRef.current) {
      anims.push(fadeInRight(btnRef.current, { delay: 0.42, duration: 0.8 }));
    }

    return () => {
      anims.forEach((a) => a?.kill?.());
    };
  }, []);

  return (
    <section id="story" className="bg-surface py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Cookies Image Card with smooth fadeIn (opacity-0 -> opacity-100) */}
          <div className="flex justify-center">
            <div
              ref={imgRef}
              className="w-full max-w-md aspect-square rounded-[8px] overflow-hidden shadow-xs border border-brand-muted bg-surface-muted"
            >
              <img
                src={aboutUsImg}
                alt="The Story Behind Frookies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Story Copy - Staggered fadeInRight sequence */}
          <div className="flex flex-col items-start">
            
            {/* 1. Title + Squiggle + Headline appears first */}
            <div ref={titleRef} className="flex flex-col items-start w-full">
              <div className="flex flex-col items-start mb-2">
                <span className="text-primary font-semibold text-sm tracking-wide">
                  Our Story
                </span>
                <OrangeSquiggle className="w-16 h-2 -mt-0.5" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-brown leading-tight mb-5">
                The Story Behind Frookies
              </h2>
            </div>

            {/* 2. Description appears with slight delay */}
            <p
              ref={descRef}
              className="text-brand-gray text-sm sm:text-base leading-relaxed mb-8"
            >
              It started with a simple idea — make frookies that people crave after the first bite. <strong className="text-brand-brown font-semibold">Today, Frookies is</strong> more than just a brand; it's promise of real ingredients, <strong className="text-brand-brown font-semibold">homemade taste and happiness in every box</strong>.
            </p>

            {/* 3. Discover Button appears last in sequence */}
            <div ref={btnRef}>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border border-brand-border hover:border-primary text-brand-brown hover:text-primary px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}