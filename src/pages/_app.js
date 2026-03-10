import '../styles/globals.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll } from '../lib/animations';

function MyApp({ Component, pageProps, router }) {
  const appRef = useRef();

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize smooth scroll
    const scroll = initSmoothScroll(appRef.current);

    // Cleanup on route change
    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [router.route]);

  return (
    <div ref={appRef} data-scroll-container>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;