import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <div className={styles.companyHeader}>
          <div className={styles.companyLogo}>LOGO</div>
          <h1 className={styles.companyName}>Company Name</h1>
        </div>
        <p className={styles.missionStatement}>
          Our mission is to deliver exceptional products and services that enhance our customers' lives while creating sustainable value for our stakeholders.
        </p>
      </div>
    </section>
  );
}