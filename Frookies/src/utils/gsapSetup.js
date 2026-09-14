import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register standard GSAP plugins for future full page transitions
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
export default gsap;