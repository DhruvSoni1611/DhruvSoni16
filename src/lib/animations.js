import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Initialize Locomotive Scroll
export const initSmoothScroll = (container) => {
  if (typeof window !== 'undefined') {
    const LocomotiveScroll = require('locomotive-scroll').default;
    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      getSpeed: true,
      getDirection: true,
    });
    return scroll;
  }
  return null;
};

// Page transition animations
export const pageTransitionIn = () => {
  const tl = gsap.timeline();
  tl.set(".loading-screen", { top: "100%" });
  tl.to(".loading-screen", {
    duration: 0.5,
    top: "0%",
    ease: "Power4.easeIn",
  });
  return tl;
};

export const pageTransitionOut = () => {
  const tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 0.8,
    top: "-100%",
    ease: "Power3.easeInOut",
  });
  return tl;
};

// Element animations
export const animateElement = (element, config = {}) => {
  const defaultConfig = {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    ...config,
  };
  gsap.from(element, defaultConfig);
};

// Scroll-triggered animations
export const initScrollTriggerAnimations = () => {
  if (typeof window !== 'undefined') {
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }
};