import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src="/stockBanner.jpg"
            alt="Background"
            fill
            style={{
              objectFit: 'cover',
              filter: 'grayscale(30%) brightness(60%)'
            }}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.missionStatement}>
            Nurturing young minds with engaging, inclusive education that sparks curiosity, creativity, and confidence for bright futures.
          </p>
        </div>
      </section>

      {/* CTA Cards Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaGrid}>
          <div className={`${styles.ctaCard} ${styles.enrollCard}`}>
            <h3>Enroll Now</h3>
            <p>Join Happy and give your child the best start in life</p>
            <Link className={styles.ctaButton} href="/enrolment">Start Enrolment</Link>
          </div>

          <div className={`${styles.ctaCard} ${styles.aboutCard}`}>
            <h3>About Us</h3>
            <p>Learn more about our story, our team, and what makes Happy Horizons special</p>
            <Link className={styles.ctaButton} href="/about">Our Story</Link>
          </div>
        </div>
      </div>
    </>
  );
}