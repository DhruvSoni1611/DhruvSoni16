import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/Navbar.module.css';

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.creditsTop}>
          <div className={styles.btnLink}>
            <Link href="/">
              <span className={styles.btnText}>
                <div className={styles.credit}><span>©</span></div>
                <div className={styles.cbd}>
                  <span className={styles.codeBy}>Code by </span>
                  <span className={styles.dhruv}>
                    <span className={styles.dennisSpan}>Dhruv</span> 
                    <span className={styles.soni}>Soni</span>
                  </span>
                </div>
              </span>
            </Link>
          </div>
        </div>
        <ul className={styles.linksWrap}>
          <li className={styles.btnLink}>
            <Link href="/work">
              <span className={styles.btnText}>
                <span className={styles.btnTextInner}>Work</span>
              </span>
            </Link>
          </li>
          <li className={styles.btnLink}>
            <Link href="/about">
              <span className={styles.btnText}>
                <span className={styles.btnTextInner}>About</span>
              </span>
            </Link>
          </li>
          <li className={styles.btnLink}>
            <Link href="/contact">
              <span className={styles.btnText}>
                <span className={styles.btnTextInner}>Contact</span>
              </span>
            </Link>
          </li>
          <li className={styles.btnMenu}>
            <div className={styles.btnClick} onClick={toggleNav}>
              <div className={styles.btnText}>
                <span className={styles.btnTextInner}>Menu</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={`${styles.fixedNavBack} ${isNavActive ? styles.navActive : ''}`} onClick={toggleNav}></div>
      <div className={`${styles.fixedNav} ${isNavActive ? styles.navActive : ''}`}>
        <div className={styles.fixedNavInner}>
          <div className={styles.navRow}>
            <h5>Navigation</h5>
            <div className={styles.stripe}></div>
            <ul className={styles.linksWrap}>
              <li className={styles.btnLink}>
                <Link href="/">
                  <span className={styles.btnText}>
                    <span className={styles.btnTextInner}>Home</span>
                  </span>
                </Link>
              </li>
              <li className={styles.btnLink}>
                <Link href="/work">
                  <span className={styles.btnText}>
                    <span className={styles.btnTextInner}>Work</span>
                  </span>
                </Link>
              </li>
              <li className={styles.btnLink}>
                <Link href="/about">
                  <span className={styles.btnText}>
                    <span className={styles.btnTextInner}>About</span>
                  </span>
                </Link>
              </li>
              <li className={styles.btnLink}>
                <Link href="/contact">
                  <span className={styles.btnText}>
                    <span className={styles.btnTextInner}>Contact</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.socialRow}>
            <div className={styles.stripe}></div>
            <div className={styles.socials}>
              <h5>Socials</h5>
              <ul>
                <li className={styles.btnLinkExternal}>
                  <a href="https://github.com/DhruvSoni1611" target="_blank" rel="noopener noreferrer">
                    <span className={styles.btnText}>
                      <span className={styles.btnTextInner}>Github</span>
                    </span>
                  </a>
                </li>
                <li className={styles.btnLinkExternal}>
                  <a href="https://www.instagram.com/dhruv.soni_1611/" target="_blank" rel="noopener noreferrer">
                    <span className={styles.btnText}>
                      <span className={styles.btnTextInner}>Instagram</span>
                    </span>
                  </a>
                </li>
                <li className={styles.btnLinkExternal}>
                  <a href="https://x.com/DhruvSoni1611" target="_blank" rel="noopener noreferrer">
                    <span className={styles.btnText}>
                      <span className={styles.btnTextInner}>X</span>
                    </span>
                  </a>
                </li>
                <li className={styles.btnLinkExternal}>
                  <a href="https://www.linkedin.com/in/dhruvsoni11/" target="_blank" rel="noopener noreferrer">
                    <span className={styles.btnText}>
                      <span className={styles.btnTextInner}>LinkedIn</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}