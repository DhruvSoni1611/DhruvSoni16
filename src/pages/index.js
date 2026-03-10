import Layout from '../components/Layout';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const nameRef = useRef();
  const introRef = useRef();

  useEffect(() => {
    // GSAP animations for the homepage
    gsap.from(nameRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5,
    });
    gsap.from(introRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 1,
    });
  }, []);

  return (
    <Layout title="Dhruv Soni • Software Designer & Engineer">
      <div className={styles.homeHeader}>
        <div className={styles.bigName} ref={nameRef}>
          <h1>Dhruv Soni<span className={styles.spacer}>— / —</span></h1>
        </div>
        <div className={styles.intro} ref={introRef}>
          <h4>Engineering intelligent systems with clean code and clarity.</h4>
          <p>Bridging the gap between elegant design and smart algorithms.</p>
        </div>
      </div>
    </Layout>
  );
}