import Layout from '../components/Layout';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/pages/Work.module.css';

const projects = [
  {
    id: 1,
    title: 'DAKSHA(दक्ष)',
    location: 'Spain',
    services: 'Interaction & Development',
    year: '2024',
    type: ['development', 'interaction'],
  },
  {
    id: 2,
    title: 'Rachana(रचना)',
    location: 'Bali, Indonesia',
    services: 'Design & Development',
    year: '2024',
    type: ['design', 'development'],
  },
  {
    id: 3,
    title: 'Chakra™(चक्र)',
    location: 'United Kingdom',
    services: 'Design & Development',
    year: '2023',
    type: ['design', 'development'],
  },
  {
    id: 4,
    title: 'Mārga(मार्ग)',
    location: 'The Netherlands',
    services: 'Design & Development',
    year: '2023',
    type: ['design', 'development'],
  },
  {
    id: 5,
    title: 'SONY TV+',
    location: 'Hong Kong',
    services: 'Design & Development',
    year: '2023',
    type: ['design', 'development'],
  },
  {
    id: 6,
    title: 'The Maya(माया)',
    location: 'The Netherlands',
    services: 'Design & Development',
    year: '2023',
    type: ['design', 'development'],
  },
  {
    id: 7,
    title: 'Samvad (संवाद)',
    location: 'The Netherlands',
    services: 'Design & Development',
    year: '2022',
    type: ['design', 'development'],
  },
  {
    id: 8,
    title: 'Samanvaya(समन्वय)',
    location: 'Curaçao',
    services: 'Interaction & Development',
    year: '2022',
    type: ['development', 'interaction'],
  },
  {
    id: 9,
    title: 'Sadhana(साधना)',
    location: 'United States',
    services: 'Interaction & Development',
    year: '2021',
    type: ['development', 'interaction'],
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('rows');
  const headerRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    });
    gsap.from(projectsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 1,
    });
  }, []);

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.type.includes(activeFilter));

  return (
    <Layout title="Work - Dhruv Soni" description="Creating next level digital products. I help companies from all over the world.">
      <div className={styles.workHeader} ref={headerRef}>
        <h1>Creating next level digital products</h1>
      </div>
      <div className={styles.workFilters}>
        <div className={styles.filterRow}>
          <div className={styles.toggleRow}>
            <button
              className={`${styles.btnNormal} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={`${styles.btnNormal} ${activeFilter === 'design' ? styles.active : ''}`}
              onClick={() => setActiveFilter('design')}
            >
              Design
            </button>
            <button
              className={`${styles.btnNormal} ${activeFilter === 'development' ? styles.active : ''}`}
              onClick={() => setActiveFilter('development')}
            >
              Development
            </button>
          </div>
          <div className={styles.gridRow}>
            <button
              className={`${styles.btnNormal} ${styles.btnIcon} ${viewMode === 'rows' ? styles.active : ''}`}
              onClick={() => setViewMode('rows')}
            >
              <svg width="20" height="19" viewBox="0 0 20 19">
                <path d="M0 6h20v1H0zM0 0h20v1H0zM0 12h20v1H0zM0 18h20v1H0z" fill="currentColor" />
              </svg>
            </button>
            <button
              className={`${styles.btnNormal} ${styles.btnIcon} ${viewMode === 'columns' ? styles.active : ''}`}
              onClick={() => setViewMode('columns')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M8 0H0v8h8V0zM7 1v6H1V1h6zM8 12H0v8h8v-8zm-1 1v6H1v-6h6zM20 0h-8v8h8V0zm-1 1v6h-6V1h6zM20 12h-8v8h8v-8zm-1 1v6h-6v-6h6z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.workProjects} ref={projectsRef}>
        {viewMode === 'rows' ? (
          <div className={styles.projectsRowView}>
            <div className={styles.gridSubTitle}>
              <div className={styles.flexCol}><h5>Client</h5></div>
              <div className={styles.flexCol}><h5>Location</h5></div>
              <div className={styles.flexCol}><h5>Services</h5></div>
              <div className={styles.flexCol}><h5>Year</h5></div>
            </div>
            <ul className={styles.workItems}>
              {filteredProjects.map(project => (
                <li key={project.id} className={styles.projectItem}>
                  <div className={styles.stripe}></div>
                  <div className={styles.row}>
                    <div className={styles.flexCol}>
                      <h4>{project.title}</h4>
                    </div>
                    <div className={styles.flexCol}>
                      <p>{project.location}</p>
                    </div>
                    <div className={styles.flexCol}>
                      <p>{project.services}</p>
                    </div>
                    <div className={styles.flexCol}>
                      <p>{project.year}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.projectsColumnView}>
            {filteredProjects.map(project => (
              <div key={project.id} className={styles.singleTileWrap}>
                <div className={styles.tileImage}></div>
                <div className={styles.flexCol}>
                  <h4>{project.title}</h4>
                  <div className={styles.stripe}></div>
                </div>
                <div className={styles.flexCol}>
                  <p>{project.services}</p>
                </div>
                <div className={styles.flexCol}>
                  <p>{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}