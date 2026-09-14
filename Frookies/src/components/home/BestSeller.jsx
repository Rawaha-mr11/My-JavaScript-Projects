import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import product1 from '../../assets/images/product_1.png';
import product2 from '../../assets/images/product_2.png';
import product3 from '../../assets/images/product_3.png';
import OrangeSquiggle from '../common/OrangeSquiggle';
import { fadeInLeft, fadeInBottom } from '../../utils/animations';

export default function BestSeller() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

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

    return () => {
      anims.forEach((a) => a?.kill?.());
    };
  }, []);

  const products = [
    {
      id: 1,
      title: 'Classic chocolate Chip',
      price: 'Rs. 500',
      rating: 5,
      image: product1,
    },
    {
      id: 2,
      title: 'Soft chocolate Chip',
      price: 'Rs. 550',
      rating: 5,
      image: product2,
    },
    {
      id: 3,
      title: 'Red Velvet chocolate Chip',
      price: 'Rs. 600',
      rating: 5,
      image: product3,
    },
  ];

  return (
    <section id="menu" className="bg-surface py-12 md:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div ref={headingRef}>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-brown">
              Best Seller
            </h2>
            <OrangeSquiggle className="w-16 h-2 -mt-0.5" />
          </div>

          <a
            href="#menu"
            className="text-xs text-brand-gray hover:text-primary font-medium flex items-center gap-1 transition-colors"
          >
            <span>view all</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* 3 Best Seller Product Cards with fadeInBottom animation and rounded-[8px] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-surface border border-brand-border/40 rounded-[8px] p-4 flex flex-col items-center text-center shadow-xs cursor-pointer transition-shadow duration-200 hover:shadow-md"
            >
              {/* Product Image Box - Rotated 180 degrees per user requirement */}
              <div className="w-full aspect-square bg-surface-muted rounded-[5px] flex items-center justify-center p-4 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain rotate-130"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-brand-brown mb-2 leading-tight">
                {product.title}
              </h3>

              {/* Price and Rating Row */}
              <div className="w-full flex items-center justify-between px-2 mb-4 text-xs">
                <span className="font-bold text-brand-brown">
                  {product.price}
                </span>

                <div className="flex flex-col items-center text-brand-dark">
                  <p>frookies customer review</p>
                  <div className="flex items-center gap-0.5 text-primary">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" stroke="none" />
                    ))}
                    <p className='ml-2 font-semibold text-brand-brown'>5/5</p>
                  </div>
                </div>
              </div>

              {/* Order Now Button */}
              <button
                type="button"
                className="w-full max-w-[140px] bg-primary hover:bg-primary-hover text-surface text-xs font-medium py-2 px-4 rounded-full transition-colors duration-200 cursor-pointer shadow-xs"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}