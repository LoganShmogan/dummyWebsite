import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <Image
          src="/stockBanner.jpg"
          alt="Background"
          fill
          style={{
            objectFit: 'cover',
            filter: 'grayscale(20%) brightness(40%)'
          }}
          priority  
        />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.companyHeader}>
          <h1 className={styles.companyName}>Happy Horizons</h1>
        </div>
        <p className={styles.missionStatement}>
            Nurturing young minds with engaging, inclusive education that sparks curiosity, creativity, and confidence for bright futures.
        </p>
      </div>
    </section>
  );
}