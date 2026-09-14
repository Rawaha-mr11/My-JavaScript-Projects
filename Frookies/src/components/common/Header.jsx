import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, User, Menu as MenuIcon, X } from 'lucide-react';
import logoLight from '../../assets/icons/logo_light.png';
import logoDark from '../../assets/icons/logo_dark.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Menu', href: '#menu' },
    { name: 'Chef Gallery', href: '#gallery' },
    { name: 'Our Story', href: '#story' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between transition-all duration-500 ease-in-out">
        {/* Brand Logo - Smooth cross-fade between Light and Dark logo */}
        <a href="#" className="relative flex items-center h-16 w-32 group">
          <img
            src={logoLight}
            alt="Frookies Logo"
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-16 w-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-105 ${
              isScrolled ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          />
          <img
            src={logoDark}
            alt="Frookies Logo"
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-16 w-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-105 ${
              isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-500 ease-in-out ${
                isScrolled
                  ? link.active
                    ? 'text-primary font-semibold'
                    : 'text-brand-brown hover:text-primary'
                  : link.active
                  ? 'text-surface font-semibold'
                  : 'text-surface-muted/90 hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          {/* Wishlist Icon */}
          <button
            type="button"
            aria-label="Wishlist"
            className={`relative w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled
                ? 'border-brand-border/40 text-brand-brown hover:bg-surface-muted hover:border-brand-border'
                : 'border-surface/20 text-surface/90 hover:text-surface hover:border-surface/40 hover:bg-surface/10'
            }`}
          >
            <Heart size={16} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-surface text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          {/* Cart Icon */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className={`relative w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled
                ? 'border-brand-border/40 text-brand-brown hover:bg-surface-muted hover:border-brand-border'
                : 'border-surface/20 text-surface/90 hover:text-surface hover:border-surface/40 hover:bg-surface/10'
            }`}
          >
            <ShoppingBag size={16} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-surface text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          {/* User Profile Icon */}
          <button
            type="button"
            aria-label="User Profile"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled
                ? 'border-brand-border/40 text-brand-brown hover:bg-surface-muted hover:border-brand-border'
                : 'border-surface/20 text-surface/90 hover:text-surface hover:border-surface/40 hover:bg-surface/10'
            }`}
          >
            <User size={16} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer ${
              isScrolled
                ? 'border-brand-border/40 text-brand-brown hover:bg-surface-muted'
                : 'border-surface/20 text-surface hover:bg-surface/10'
            }`}
          >
            {mobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 py-4 space-y-3 transition-colors duration-500 ease-in-out ${
            isScrolled
              ? 'bg-surface border-t border-brand-border/30 shadow-md'
              : 'bg-brand-dark border-t border-surface/10'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm transition-colors ${
                isScrolled
                  ? 'text-brand-brown hover:text-primary'
                  : 'text-surface-muted hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}