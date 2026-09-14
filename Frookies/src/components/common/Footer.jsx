import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoLight from '../../assets/icons/logo_light.png';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    if (lettersRef.current.length > 0 && footerRef.current) {
      const anim = gsap.fromTo(
        lettersRef.current,
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 0.04,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      return () => anim?.kill?.();
    }
  }, []);

  const quickLinks = [
    { name: 'menu', href: '#menu' },
    { name: 'Chef Gallery', href: '#gallery' },
    { name: 'Our Story', href: '#story' },
    { name: 'Cart', href: '#cart' },
    { name: 'Wishlist', href: '#wishlist' },
    { name: 'Order Tracking', href: '#tracking' },
  ];

  const legalLinks = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Feedback', href: '#feedback' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-brand-dark text-surface pt-14 pb-8 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Follow Us Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h3 className="text-base sm:text-lg font-bold text-surface mb-4">
            Follow us
          </h3>

          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on Instagram"
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-surface hover:scale-110 transition-transform duration-200 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Subscribe on YouTube"
              className="w-9 h-9 rounded-full bg-[#ff0000] flex items-center justify-center text-surface hover:scale-110 transition-transform duration-200 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on Facebook"
              className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center text-surface hover:scale-110 transition-transform duration-200 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on TikTok"
              className="w-9 h-9 rounded-full bg-brand-black border border-surface/20 flex items-center justify-center text-surface hover:scale-110 transition-transform duration-200 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.67 6.34 6.34 0 0 0 9.35 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.16 8.16 0 0 0 4.9 1.63v-3.5a4.85 4.85 0 0 1-1-.49z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links & Brand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 pb-12 border-b border-surface/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="mb-3">
              <img
                src={logoLight}
                alt="Frookies"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-surface/70 text-xs sm:text-sm">
              Made for taste and happiness
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-surface mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-surface/75">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-surface mb-3">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-surface/75">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 text-center text-xs text-surface/45 relative z-10">
          <p>
            Copyright © Frookies Inc. All right reserved since 2026 - {new Date().getFullYear()}
          </p>
        </div>

      </div>

      {/* Giant Frookies Watermark Typography in Background */}
      <div
        className="absolute -bottom-11 inset-x-0 flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="text-[120px] sm:text-[200px] md:text-[330px] font-black leading-none whitespace-nowrap flex justify-center" style={{ fontFamily: "'Berlin Sans FB Demi', 'Berlin Sans FB', sans-serif" }}>
          {['F', 'r', 'o', 'o', 'k', 'i', 'e', 's'].map((letter, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="inline-block text-surface will-change-transform"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}