import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.imageUrl} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <Link href={project.link} className={styles.link}>
          Voir le projet
        </Link>
      </div>
    </div>
  );
}
