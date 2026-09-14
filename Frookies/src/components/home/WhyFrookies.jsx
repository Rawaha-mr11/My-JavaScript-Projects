import React, { useEffect, useRef } from 'react';
import { Leaf, Gift, Heart, ArrowUpRight } from 'lucide-react';
import graphic5 from '../../assets/icons/Graphic_5.png';
import OrangeSquiggle from '../common/OrangeSquiggle';
import { fadeInLeft, fadeInBottom } from '../../utils/animations';

export default function WhyFrookies() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const anims = [];
    if (headingRef.current) {
      anims.push(fadeInLeft(headingRef.current));
    }
    cardsRef.current.forEach((card, idx) => {
      if (card) {
        anims.push(fadeInBottom(card, { delay: idx * 0.1 }));
      }
    });

    return () => {
      anims.forEach((a) => a?.kill?.());
    };
  }, []);

  const features = [
    {
      customIcon: graphic5,
      title: 'Freshly baked',
      description: 'Made fresh every day with passion',
    },
    {
      lucideIcon: <Leaf className="text-emerald-600" size={24} />,
      title: 'Premium Ingredients',
      description: 'Only the finest quality',
    },
    {
      lucideIcon: <Gift className="text-primary" size={24} />,
      title: 'Curated for you',
      description: 'Personalized perfection for every customer',
    },
    {
      lucideIcon: <Heart className="text-rose-500 fill-rose-500" size={24} />,
      title: 'Made with Love',
      description: 'Every recipe baked with pure dedication',
    },
  ];

  return (
    <section className="bg-surface py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: 2x2 Feature Grid (Cards with rounded-[8px] and Framer Motion) */}
          <div className="lg:col-span-7">
            <div ref={headingRef} className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-brown">
                Why Frookies
              </h2>
              <OrangeSquiggle className="w-16 h-2 -mt-0.5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="bg-surface border border-brand-border/30 rounded-[8px] p-5 shadow-xs flex flex-col justify-start transition-colors duration-200 hover:border-primary/40"
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    {item.customIcon ? (
                      <img
                        src={item.customIcon}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      item.lucideIcon
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-brand-brown mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-gray leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-5 mt-16 flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 text-brand-brown">
              We don't just bake cookies {' '}
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5 text-primary">
                We bake moments
              </span>
            </h2>


            <p className="text-brand-gray text-sm sm:text-base leading-relaxed mb-8">
              At Frookies, we believe that every biscuit tells a story — of quality, care and passion. From premium ingredients to a perfect packaging, we make sure every bite brings a smile.
            </p>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 border border-brand-border hover:border-primary text-brand-brown hover:text-primary px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              <span>Learn more</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}