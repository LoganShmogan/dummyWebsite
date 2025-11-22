'use client';

import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const MapWithNoSSR = dynamic(
  () => import('@/app/components/Map'),
  { ssr: false }
);

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const serviceID = 'service_hzqpetr';
    const templateID = 'template_5jwq11b';
    const publicKey = 'BAoNsXlnhqfcGq7F0';

    // Error handling for enrolement form
    if (!form.current) {
      setMessage('Form reference not found');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      console.log('SUCCESS!', result);
      setMessage('Enquiry sent successfully!');
      form.current.reset();
    } catch (error) {
      // Use EmailJS's own response status type
      const emailError = error as EmailJSResponseStatus;
      
      console.error('FAILED...', emailError);
      console.error('Error status:', emailError?.status);
      console.error('Error text:', emailError?.text);
      
      if (emailError?.status === 400) {
        setMessage('Invalid configuration. Please check your EmailJS credentials.');
      } else if (emailError?.status === 403) {
        setMessage('Access denied. Check your Public Key.');
      } else if (emailError?.status === 404) {
        setMessage('Service or Template not found.');
      } else {
        setMessage('Failed to send enquiry. Please try again or contact support.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h3>Send us an Enquiry</h3>
            {message && (
              <div className={message.includes('successfully') ? styles.messageSuccess : styles.messageError}>
                {message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="childsName">Childs Name</label>
                <input type="text" id="childsName" name="childsName" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="dob">Childs Date of Birth</label>
                <input type="date" id="dob" name="dob" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="startDate">Preferred Start Date (or Estimate)</label>
                <input type="text" id="startDate" name="startDate" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="hours">Preferred Hours for Enrolment (or Estimate)</label>
                <div className={styles.hoursGrid}>
                  <input type="text" id="monHours" name="monHours" placeholder="Mon" className={styles.formInput} />
                  <input type="text" id="tueHours" name="tueHours" placeholder="Tue" className={styles.formInput} />
                  <input type="text" id="wedHours" name="wedHours" placeholder="Wed" className={styles.formInput} />
                  <input type="text" id="thuHours" name="thuHours" placeholder="Thu" className={styles.formInput} />
                  <input type="text" id="friHours" name="friHours" placeholder="Fri" className={styles.formInput} />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
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