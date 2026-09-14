import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import galleryBaked from '../../assets/images/gallery_baked.jpg';
import galleryPacked from '../../assets/images/gallery_packed.jpg';
import galleryDelivered from '../../assets/images/gallery_delivered.jpg';
import OrangeSquiggle from '../common/OrangeSquiggle';
import { fadeInLeft, fadeInBottom, fadeInRight } from '../../utils/animations';

export default function GallerySection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const rightTitleRef = useRef(null);
  const rightDescRef = useRef(null);
  const rightBtnRef = useRef(null);

  useEffect(() => {
    const anims = [];
    if (headingRef.current) {
      anims.push(fadeInLeft(headingRef.current));
    }
    cardsRef.current.forEach((card, idx) => {
      if (card) {
        anims.push(fadeInBottom(card, { delay: idx * 0.12 }));
      }
    });

    if (rightTitleRef.current) {
      anims.push(fadeInRight(rightTitleRef.current, { delay: 0, duration: 0.8 }));
    }
    if (rightDescRef.current) {
      anims.push(fadeInRight(rightDescRef.current, { delay: 0.2, duration: 0.8 }));
    }
    if (rightBtnRef.current) {
      anims.push(fadeInRight(rightBtnRef.current, { delay: 0.4, duration: 0.8 }));
    }

    return () => {
      anims.forEach((a) => a?.kill?.());
    };
  }, []);

  const galleryItems = [
    {
      image: galleryBaked,
      label: 'Baked',
    },
    {
      image: galleryPacked,
      label: 'Packing',
    },
    {
      image: galleryDelivered,
      label: 'Delivered',
    },
  ];

  return (
    <section id="gallery" className="bg-brand-brown text-surface py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div ref={headingRef} className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface">
            Gallery
          </h2>
          <OrangeSquiggle className="w-16 h-2 -mt-0.5" />
        </div>

        {/* Content Layout: 3 Gallery Cards on Left, Copy & Action on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* 3 Photo Cards - Strictly rounded-[8px] with fadeInBottom animation */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-3 sm:gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative aspect-[3/5] rounded-[8px] overflow-hidden shadow-md bg-brand-dark cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />

                {/* Dark overlay banner at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-brand-dark/85 py-1.5 text-center backdrop-blur-xs">
                  <span className="text-[11px] sm:text-xs font-medium text-surface/90">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-4">
            <h3
              ref={rightTitleRef}
              className="text-2xl sm:text-3xl font-bold text-surface leading-tight mb-4"
            >
              Baked Behind the Scene
            </h3>

            <p
              ref={rightDescRef}
              className="text-surface/75 text-sm sm:text-base leading-relaxed mb-6"
            >
              From mixing the dough to packing your favorite frookie... see the magic happen at Frookies.
            </p>

            <a
              ref={rightBtnRef}
              href="#gallery"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-surface text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Watch our video</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}