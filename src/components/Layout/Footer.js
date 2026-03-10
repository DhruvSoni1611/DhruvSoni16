import styles from '../../styles/components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.credits}>
            <h5>Version</h5>
            <p>2025 © Edition</p>
          </div>
          <div className={styles.time}>
            <h5>Local time</h5>
            <p><span id="timeSpan">09:41 PM IST</span></p>
          </div>
        </div>
        <div className={styles.row}>
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
    </footer>
  );
}