import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">BELINDA NWT.</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Accueil</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
