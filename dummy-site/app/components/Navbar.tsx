"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from './Navbar.module.css';
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" onClick={closeMobileMenu}>
          <h1 className={styles.name}>Happy Horizons</h1>
        </Link> 

        {/* Desktop Navigation Links - hidden on mobile */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/enrolment" className={styles.navLink}>Enrolment</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
        </div>
        
        {/* Desktop CTA Button - hidden on mobile */}
        <div className={styles.ctaContainer}>
          <Button className={styles.ctaButton}>Enrol Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {/* Burger icon - you can use an SVG or text */}
          <span>☰</span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link 
            href="/" 
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link 
            href="/enrolment" 
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Enrolment
          </Link>
          <Link 
            href="/gallery" 
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
        </div>
      )}
    </header>
  );
}