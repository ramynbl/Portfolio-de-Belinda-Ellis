import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './projectDetail.module.css';
import projectsData from '../../../data/projects.json';
import projectDetails from '../../../data/projectDetails.json';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const details = projectDetails[slug];

  return (
    <div className={styles.container}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          {details ? details.title : project.title}
        </h1>
        <div className={styles.heroMeta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Année</span>
            <span className={styles.metaValue}>{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Catégorie</span>
            <span className={styles.metaValue}>{project.category}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Industrie</span>
            <span className={styles.metaValue}>{project.industry}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Type</span>
            <span className={styles.metaValue}>{project.type}</span>
          </div>
        </div>
      </section>

      {/* ── Cover Image ── */}
      {details && details.coverImage && (
        <div className={styles.coverImage}>
          <Image
            src={details.coverImage}
            alt={details.title}
            className={styles.coverImg}
            fill
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* ── Description ── */}
      {details && (
        <section className={styles.descriptionSection}>
          <div className={styles.descriptionHeader}>
            <h2 className={styles.descriptionTitle}>
              {details.subtitle || 'À propos du projet'}
            </h2>
            {details.instagram && (
              <a 
                href={details.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.instagramLink}
              >
                Instagram ↗
              </a>
            )}
            {details.presentation && (
              <a 
                href={details.presentation} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.presentationLink}
                download
              >
                Voir la présentation (PDF) 🡓
              </a>
            )}
          </div>
          <div className={styles.descriptionText}>
            {details.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {details && details.gallery && (
        <section className={styles.gallerySection}>
          <div className={styles.galleryGrid}>
            {details.gallery.map((img, i) => (
              <div
                key={i}
                className={styles.galleryItem}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Video ── */}
      {details && details.video && (
        <section className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <video
              src={details.video}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </section>
      )}

      {/* ── Mockups (full width) ── */}
      {details && details.mockups && (
        <section className={styles.gallerySection}>
          <div className={styles.galleryGrid}>
            {details.mockups.map((img, i) => (
              <div
                key={i}
                className={`${styles.galleryItem} ${img.full ? styles.galleryItemFull : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Back ── */}
      <Link href="/projects" className={styles.backLink}>
        ← Tous les projets
      </Link>

    </div>
  );
}
