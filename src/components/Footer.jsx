import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />
      
      <div className={styles.footerContent}>
        {/* Engagement / Newsletter Section */}
        <div className={styles.engagementSection}>
          <h2 className={styles.engagementTitle}>Travaillons ensemble</h2>
          <p className={styles.engagementText}>
            Laissez votre email pour être recontacté(e) et discuter de vos prochains projets visuels.
          </p>
          <form 
            action="https://formspree.io/f/belindaellisnewton@gmail.com" 
            method="POST"
            className={styles.form}
          >
            {/* Subject for Formspree */}
            <input type="hidden" name="_subject" value="Nouvelle inscription - Footer Portfolio" />
            
            <input 
              type="email" 
              name="email"
              placeholder="votre@email.com" 
              className={styles.input} 
              required
            />
            <button type="submit" className={styles.submitBtn}>
              ÊTRE RECONTACTÉ(E)
            </button>
          </form>
        </div>

        {/* Bottom Nav / Brand Row */}
        <div className={styles.bottomRow}>
          <div className={styles.logo}>
            <Link href="/">BELINDA NWT.</Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">Accueil</Link>
            <Link href="/projects">Projets</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://www.linkedin.com/in/belinda-ellis-4a0750172?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
