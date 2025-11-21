'use client';

import styles from './page.module.css';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import('@/app/components/Map'),
  { ssr: false }
);

export default function Contact() {
  return (
    <>
      <section className={styles.mainArea}>
        <h2 className={styles.contactHeading}>Enrolment</h2>

        <div className={styles.contactContainer}>
          {/* Contact Information */}
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              <p>For enrolements please fill out the enquiry forum</p>
              <p>We would love to hear from you! Reach out through any of the following methods:
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h4>Phone</h4>
                  <p>(06) 355 8501</p>
                  <p>(021) 196 0335</p>
                </div>

                <div className={styles.contactItem}>
                  <h4>Email</h4>
                  <p>admin@happyhorizons.nz</p>
                </div>

                <div className={styles.contactItem}>
                  <h4>Address</h4>
                  <p>28 Shamrock Street, Tākaro</p>
                  <p>Palmerston North</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className={styles.hoursInfo}>
              <h4>Opening Hours</h4>
              <div className={styles.hoursList}>
                <div className={styles.hourItem}>
                  <span>Monday - Friday</span>
                  <span>7:30 AM - 5:30 PM</span>
                </div>
                <div className={styles.hourItem}>
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className={styles.hourItem}>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h3>Send us an Equiry</h3>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="childsName">Childs Name</label>
                <input type="text" id="childsName" className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="dob">Childs Date of Birth</label>
                <input type="text" id="dob" className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="startDate">Perfered Start Date (or Estimate)</label>
                <input type="text" id="startDate" className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="hours">Perfered Hours for Enrolment (or Estimate)</label>
                <input type="text" id="monHours" className={styles.formInputMon} />
                <input type="text" id="tueHours" className={styles.formInputTue} />
                <input type="text" id="wedHours" className={styles.formInputWed} />
                <input type="text" id="thuHours" className={styles.formInputThu} />
                <input type="text" id="friHours" className={styles.formInputFri} />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <h3>Find Us</h3>
          <div className={styles.mapContainer}>
            <MapWithNoSSR />
          </div>
        </div>
      </section>
    </>
  );
}