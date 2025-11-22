import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        {/* Banner Image - Hidden on mobile */}
        <div className={styles.heroBackground}>
          <Image
            src="/companyBanner.jpg"
            alt="Happy Horizons Childcare Center"
            fill
            style={{
              objectFit: 'cover',
            }}
            priority
          />
        </div>
        
        {/* Logo Image - Hidden on desktop */}
        <div className={styles.heroLogo}>
          <Image
            src="/companyLogo.jpg" 
            alt="Happy Horizons Logo"
            width={200}
            height={200}
            style={{
              objectFit: 'contain',
            }}
            priority
          />
        </div>
      </section>

      {/* CTA Cards Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaGrid}>
          <div className={`${styles.ctaCard} ${styles.aboutCard}`}>
            <h3>About Us</h3>
            <p>Learn more about our story, our team, and what makes Happy Horizons special</p>
            <Link className={styles.ctaButton} href="/about">Our Story</Link>
          </div>
          <div className={`${styles.ctaCard} ${styles.enrollCard}`}>
            <h3>Enroll Now</h3>
            <p>Join Happy and give your child the best start in life</p>
            <Link className={styles.ctaButton} href="/enrolment">Start Enrolment</Link>
          </div>
        </div>
      </div>
    </>
  );
}