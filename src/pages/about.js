import Layout from '../components/Layout';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/pages/About.module.css';

export default function About() {
  const headerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    });
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 1,
    });
  }, []);

  return (
    <Layout title="About - Dhruv Soni" description="Engineering intelligent systems by solving real problems through AI-powered logic.">
      <div className={styles.aboutHeader} ref={headerRef}>
        <h1>Bridging the gap between elegant design and smart algorithms</h1>
      </div>
      <div className={styles.aboutContent} ref={contentRef}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.flexCol}>
              <p>
                I develop intelligent software that’s grounded in strong engineering and smart design.
                With each project, I aim for simplicity, speed, and scale.
              </p>
              <p>Always engineering...</p>
            </div>
            <div className={styles.flexCol}>
              <div className={styles.digitalBall}></div>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          <h2>What I am Good at</h2>
          <div className={styles.row}>
            <div className={styles.serviceItem}>
              <h5>01</h5>
              <div className={styles.stripe}></div>
              <h4>Design</h4>
              <p>As a master's student with extensive experience in software design, I create user-friendly digital solutions.</p>
            </div>
            <div className={styles.serviceItem}>
              <h5>02</h5>
              <div className={styles.stripe}></div>
              <h4>Development</h4>
              <p>I create scalable software applications from the ground up that integrate smoothly with functionality.</p>
            </div>
            <div className={styles.serviceItem}>
              <h5>03</h5>
              <div className={styles.stripe}></div>
              <h4>The fullstack</h4>
              <p>A comprehensive web solution from idea to execution, that's what sets me apart.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}