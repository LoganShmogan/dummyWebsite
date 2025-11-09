"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from './Navbar.module.css';
import Image from "next/image";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/companyLogo.png" 
            alt="Happy Horizons Logo"
            width={75}
            height={0} 
            className={styles.logoImage}
            priority 
          />
        </Link>
        

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/enrolment" className={styles.navLink}>Enrolment</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
        </div>
        
        <div className={styles.ctaContainer}>
          <Button className={styles.ctaButton}>Enrol Now</Button>
        </div>
      </nav>
    </header>
  );
}