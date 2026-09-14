import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure ScrollTrigger is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * 1. Fade in from left (with reverse on scroll back)
 */
export const fadeInLeft = (target, options = {}) => {
  if (!target) return null;
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      x: options.x ?? -70,
    },
    {
      opacity: 1,
      x: 0,
      duration: options.duration ?? 0.8,
      ease: options.ease ?? 'power2.out',
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: options.trigger || target,
        start: options.start || 'top 85%',
        end: options.end || 'bottom 15%',
        toggleActions: 'play reverse play reverse', // Reverses when scrolled out of view
        ...options.scrollTrigger,
      },
    }
  );
};

/**
 * 2. Fade in from right (with reverse on scroll back)
 */
export const fadeInRight = (target, options = {}) => {
  if (!target) return null;
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      x: options.x ?? 70,
    },
    {
      opacity: 1,
      x: 0,
      duration: options.duration ?? 0.8,
      ease: options.ease ?? 'power2.out',
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: options.trigger || target,
        start: options.start || 'top 85%',
        end: options.end || 'bottom 15%',
        toggleActions: 'play reverse play reverse', // Reverses when scrolled out of view
        ...options.scrollTrigger,
      },
    }
  );
};

/**
 * 3. Fade in from bottom (with reverse on scroll back)
 */
export const fadeInBottom = (target, options = {}) => {
  if (!target) return null;
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: options.y ?? 70,
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.8,
      ease: options.ease ?? 'power2.out',
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: options.trigger || target,
        start: options.start || 'top 85%',
        end: options.end || 'bottom 15%',
        toggleActions: 'play reverse play reverse', // Reverses when scrolled out of view
        ...options.scrollTrigger,
      },
    }
  );
};

/**
 * 4. Smooth Fade In (opacity 0 -> 1 with reverse on scroll back)
 */
export const fadeIn = (target, options = {}) => {
  if (!target) return null;
  return gsap.fromTo(
    target,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: options.duration ?? 1.1,
      ease: options.ease ?? 'power2.out',
      delay: options.delay ?? 0,
      scrollTrigger: options.scrollTrigger !== false ? {
        trigger: options.trigger || target,
        start: options.start || 'top 85%',
        end: options.end || 'bottom 15%',
        toggleActions: 'play reverse play reverse', // Reverses when scrolled out of view
        ...options.scrollTrigger,
      } : undefined,
    }
  );
};

/**
 * Automatically initializes scroll animations on any container for elements with data-animate attributes:
 * - data-animate="fade-left"
 * - data-animate="fade-right"
 * - data-animate="fade-bottom"
 * - data-animate="fade-in"
 */
export const initScrollAnimations = (scope = document) => {
  if (typeof window === 'undefined') return () => {};

  const ctx = gsap.context(() => {
    // Fade in from left
    const leftElements = scope.querySelectorAll('[data-animate="fade-left"]');
    leftElements.forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0');
      fadeInLeft(el, { delay });
    });

    // Fade in from right
    const rightElements = scope.querySelectorAll('[data-animate="fade-right"]');
    rightElements.forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0');
      fadeInRight(el, { delay });
    });

    // Fade in from bottom
    const bottomElements = scope.querySelectorAll('[data-animate="fade-bottom"]');
    bottomElements.forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0');
      fadeInBottom(el, { delay });
    });

    // Smooth fade in
    const fadeElements = scope.querySelectorAll('[data-animate="fade-in"]');
    fadeElements.forEach((el) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0');
      fadeIn(el, { delay });
    });
  }, scope);

  return () => ctx.revert();
};

export default {
  fadeInLeft,
  fadeInRight,
  fadeInBottom,
  fadeIn,
  initScrollAnimations,
};