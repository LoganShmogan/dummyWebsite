import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Regular Footer Content */}
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Happy Horizons</h4>
          <p>Fostering a love of learning and wonder in every child through engaging, inclusive education.</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Contact Info</h4>
          <p>(06) 355 8501</p>
          <p>(021) 196 0335</p>
          <p>admin@happyhorizons.nz</p>
          <p>28 Shamrock Street, Tākaro</p>
          <p>Palmerston North</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/enroll">Enrollment</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Hours</h4>
          <p>Monday - Friday: 7.30 AM - 5.30 PM</p>
          <p>Saturday: Closed</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Happy Horizons. All rights reserved.</p>
      </div>
    </footer>
  );
}