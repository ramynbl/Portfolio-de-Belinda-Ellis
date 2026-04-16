'use client';

import Link from 'next/link';
import Image from 'next/image';
import projectsData from '../../data/projects.json';
import styles from './projects.module.css';
import { FadeInOnScroll } from '../../components/ScrollAnimations';

export default function Projects() {
  const filters = ['All', 'Web design', 'Branding', 'Mobile APP', 'Interfaces'];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.pageHeader}>
        <FadeInOnScroll direction="up" delay={0.1}>
          <div className={styles.titleRow}>
            <h1 className={styles.titleText}>works</h1>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.2}>
          <div className={styles.filterRow}>
            <div className={styles.filters}>
              {filters.map((filter, index) => (
                <span key={filter} className={index === 0 ? styles.activeFilter : ''}>
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Projects List */}
      <section className={styles.projectsList}>
        {projectsData.map((project, index) => (
          <FadeInOnScroll key={project.id} direction="up" delay={0.1}>
            <div className={styles.projectRow}>
              
              {/* Left Column: Info */}
              <div className={styles.projectInfo}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectYear}>{project.year}</p>
                <div className={styles.projectCategory}>{project.category}</div>
                
                <div className={styles.projectMeta}>
                  <div className={styles.metaCol}>
                    <span className={styles.metaLabel}>Industry:</span>
                    <span className={styles.metaValue}>{project.industry}</span>
                  </div>
                  <div className={styles.metaCol}>
                    <span className={styles.metaLabel}>Type:</span>
                    <span className={styles.metaValue}>{project.type}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual */}
              <Link href={project.link} className={styles.projectVisual}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.projectImage}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.hoverArrow}>↗</div>
              </Link>

            </div>
          </FadeInOnScroll>
        ))}
      </section>
    </div>
  );
}
