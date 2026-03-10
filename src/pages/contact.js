import Layout from '../components/Layout';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/pages/Contact.module.css';

export default function Contact() {
  const headerRef = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    });
    gsap.from(formRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 1,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Layout title="Contact - Dhruv Soni" description="Let's start a project together. Reach out via email or hop on a call.">
      <div className={styles.contactHeader} ref={headerRef}>
        <h1>
          <div className={styles.profilePicture}></div>
          Looking forward to have a project together
        </h1>
      </div>
      <div className={styles.contactContent} ref={formRef}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.flexCol}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formCol}>
                  <h5>01</h5>
                  <label className={styles.label} htmlFor="name">What's your name?</label>
                  <input
                    className={styles.field}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Raghu Ram *"
                    required
                  />
                </div>
                <div className={styles.formCol}>
                  <h5>02</h5>
                  <label className={styles.label} htmlFor="email">What's your email?</label>
                  <input
                    className={styles.field}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Raghu@ram.com *"
                    required
                  />
                </div>
                <div className={styles.formCol}>
                  <h5>03</h5>
                  <label className={styles.label} htmlFor="company">What's the name of your organization?</label>
                  <input
                    className={styles.field}
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Raghu & Ram ®"
                  />
                </div>
                <div className={styles.formCol}>
                  <h5>04</h5>
                  <label className={styles.label} htmlFor="service">What services are you looking for?</label>
                  <input
                    className={styles.field}
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Web Design, Web Development ..."
                  />
                </div>
                <div className={styles.formCol}>
                  <h5>05</h5>
                  <label className={styles.label} htmlFor="message">Your message</label>
                  <textarea
                    className={styles.field}
                    id="message"
                    name="message"
                    rows="8"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hey Dhruv, can we work on ... *"
                    required
                  ></textarea>
                </div>
                <div className={styles.btnContactSend}>
                  <button type="submit" className={styles.btnRound}>Send it!</button>
                </div>
              </form>
            </div>
            <div className={styles.flexCol}>
              <div className={styles.contactDetails}>
                <h5>Contact Details</h5>
                <ul className={styles.linksWrap}>
                  <li className={styles.btnLinkExternal}>
                    <a href="mailto:ds.dhruvsoni1603@gmail.com">ds.dhruvsoni1603@gmail.com</a>
                  </li>
                  <li className={styles.btnLinkExternal}>
                    <a href="tel:+919316025578">+91 93160 25578</a>
                  </li>
                </ul>
                <h5>Personal Details</h5>
                <ul className={styles.linksWrap}>
                  <li>
                    <p>Dhruv Soni</p>
                  </li>
                  <li>
                    <p>Location: The Bharat</p>
                  </li>
                </ul>
                <h5>Socials</h5>
                <ul className={styles.linksWrap}>
                  <li className={styles.btnLinkExternal}>
                    <a href="https://github.com/DhruvSoni1611" target="_blank" rel="noopener noreferrer">Github</a>
                  </li>
                  <li className={styles.btnLinkExternal}>
                    <a href="https://www.instagram.com/dhruv.soni_1611/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                  <li className={styles.btnLinkExternal}>
                    <a href="https://x.com/DhruvSoni1611" target="_blank" rel="noopener noreferrer">X</a>
                  </li>
                  <li className={styles.btnLinkExternal}>
                    <a href="https://www.linkedin.com/in/dhruvsoni11/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}