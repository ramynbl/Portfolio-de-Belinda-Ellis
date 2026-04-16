import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import projectsData from '../data/projects.json';
import {
  ParallaxScroll,
  FadeInOnScroll,
  StaggerContainer,
  StaggerItem,
} from '../components/ScrollAnimations';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className={styles.container}>

      {/* Hero Section — title slides in from right, catchphrase fades up */}
      <section className={styles.heroSection}>
        <div className={styles.emptyCol}></div>
        <div className={styles.heroContent}>
          <FadeInOnScroll direction="right" delay={0.1}>
            <h1 className={styles.heroTitle}>
              BELINDA<br />
              ELLIS<br />
              CREATIVE<br />
              DESIGNER
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.5}>
            <p className={styles.catchphrase}>
              Créatrice d&apos;univers visuels, je façonne des identités de marque à travers l&apos;image, le contenu et le storytelling, en donnant vie à des récits créatifs, cohérents et porteurs de sens.
            </p>
          </FadeInOnScroll>
        </div>
        <div className={styles.scrollIndicator}>
          <svg width="10" height="30" viewBox="0 0 10 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0V28M5 28L1 24M5 28L9 24" stroke="black" strokeWidth="1" strokeLinecap="square"/>
          </svg>
        </div>
      </section>

      {/* About Label */}
      <FadeInOnScroll direction="up" delay={0}>
        <div className={styles.aboutLabelRow}>
          <span className={styles.aboutLabel}>[ ABOUT ]</span>
        </div>
      </FadeInOnScroll>

      {/* About Section - Split Layout */}
      <section className={styles.splitAboutSection}>
        <div className={styles.aboutImageCol}>
          <Image
            src="/img/belinda-carre.png"
            alt="Portrait de Belinda"
            className={styles.aboutImage}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        <div className={styles.aboutTextCol}>
          <FadeInOnScroll direction="up" delay={0.2}>
            <span className={styles.aboutSubtitle}>
              <strong>Je suis Belinda</strong> — Directrice Artistique & Designer
            </span>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="up" delay={0.3}>
            <h2 className={styles.aboutHeadline}>Façonner des univers visuels singuliers</h2>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="up" delay={0.4}>
            <div className={styles.aboutParagraphs}>
              <p>
                Je m’attache à raconter des histoires à travers l’image, en imaginant des univers visuels cohérents, sensibles et singuliers. Mon approche, à la fois épurée, minimaliste et contemporaine, s’appuie sur une attention particulière portée aux détails, à l’esthétique et à l’intention derrière chaque projet.
              </p>
              <p>
                Guidée par un profond attachement à l’image, je cherche avant tout à comprendre l’univers et la vision de chaque marque ou artiste pour leur donner une traduction visuelle juste et forte. Inspirée par la mode, la musique, la photographie, la vidéo et la nature, je développe des créations qui mêlent sens, émotion et modernité.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.5}>
            <div className={styles.aboutFooter}>
              <div className={styles.aboutSocials}>
                <a href="https://www.linkedin.com/in/belinda-ellis-4a0750172?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  in
                </a>
              </div>
              <div className={styles.aboutSignature}>
                Belinda Nwt.
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Projects Preview — staggered cards */}
      <section className={styles.projectsPreviewSection}>
        <StaggerContainer className={styles.projectsGrid} staggerDelay={0.15}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <div className={styles.projectPreviewCard}>
                <Link href={project.link} className={styles.projectLink}>
                  <div className={styles.projectImageWrapper}>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className={styles.projectImage}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={styles.projectLabel}>
                    <span>[ {project.title} ]</span>
                  </div>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInOnScroll delay={0.3}>
          <div className={styles.viewAllContainer}>
            <Link href="/projects" className={styles.viewAllBtn}>
              Voir tous les projets
            </Link>
          </div>
        </FadeInOnScroll>
      </section>

    </div>
  );
}
