'use client';

import Image from 'next/image';
import styles from './contact.module.css';
import { FadeInOnScroll } from '../../components/ScrollAnimations';

export default function Contact() {
  return (
    <div className={styles.page}>

      {/* ── Left Column ── */}
      <div className={styles.leftCol}>

        <FadeInOnScroll direction="up" delay={0.1}>
          <h1 className={styles.megaTitle}>CONTACT</h1>
        </FadeInOnScroll>

        <div className={styles.contentGrid}>

          {/* ── Intro + Form ── */}
          <FadeInOnScroll direction="up" delay={0.2} className={styles.formSide}>

            <form 
              action="https://formspree.io/f/belindaellisnewton@gmail.com" 
              method="POST"
              className={styles.form}
            >
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.formInput}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.formInput}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="subject">Sujet</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={styles.formInput}
                  placeholder="Votre sujet"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Envoyer
              </button>
            </form>
          </FadeInOnScroll>

          {/* ── Contact Details ── */}
          <FadeInOnScroll direction="up" delay={0.35} className={styles.detailsSide}>

            <div className={styles.infoBlock}>
              <p className={styles.introText}>
                Pour toute demande de projet, collaboration ou juste pour dire bonjour, n&apos;hésitez pas à me contacter.
              </p>
              <span className={styles.infoLabel}>Nouveaux projets</span>
              <span className={styles.infoValue}>Belinda Ellis</span>
              <span className={styles.infoValueLight}>belindaellisnewton@gmail.com</span>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Localisation</span>
              <span className={styles.infoValueLight}>
                Paris, France
              </span>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Suivre</span>
              <div className={styles.socialRow}>
                <a
                  href="https://www.linkedin.com/in/belinda-ellis-4a0750172?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </FadeInOnScroll>

        </div>
      </div>

      {/* ── Right Column (Photo) ── */}
      <div className={styles.rightCol}>
        <Image
          src="/img/contact.png"
          alt="Contact Belinda Nwt."
          className={styles.contactImage}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

    </div>
  );
}
