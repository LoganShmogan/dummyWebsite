"use client";

import React from "react";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const MapWithNoSSR = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
});

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const serviceID = "service_hzqpetr";
    const templateID = "template_zpxi9vi";
    const publicKey = "BAoNsXlnhqfcGq7F0";

    // Error handling for contact form
    if (!form.current) {
      setMessage("Form reference not found");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        form.current,
        publicKey,
      );
      console.log("SUCCESS!", result);
      setMessage("Enquiry sent successfully!");
      form.current.reset();
    } catch (error) {
      const emailError = error as EmailJSResponseStatus;

      console.error("FAILED...", emailError);
      console.error("Error status:", emailError?.status);
      console.error("Error text:", emailError?.text);

      if (emailError?.status === 400) {
        setMessage(
          "Invalid configuration. Please check your EmailJS credentials.",
        );
      } else if (emailError?.status === 403) {
        setMessage("Access denied. Check your Public Key.");
      } else if (emailError?.status === 404) {
        setMessage("Service or Template not found.");
      } else {
        setMessage(
          "Failed to send enquiry. Please try again or contact support.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className={styles.mainArea}>
        <h2 className={`${styles.contactHeading} `}>Contact</h2>

        <div className={styles.contactContainer}>
          {/* Contact Information */}
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <h3 className={``}>Get in Touch</h3>
              <p>
                We would love to hear from you! Reach out through any of the
                following methods:
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h4 className={``}>Phone</h4>
                  <p>(06) 355 8501</p>
                  <p>(021) 196 0335</p>
                </div>

                <div className={styles.contactItem}>
                  <h4 className={``}>Email</h4>
                  <p>admin@happyhorizons.nz</p>
                </div>

                <div className={styles.contactItem}>
                  <h4 className={``}>Address</h4>
                  <p>28 Shamrock Street, Tākaro</p>
                  <p>Palmerston North</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className={styles.hoursInfo}>
              <h4 className={``}>Opening Hours</h4>
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
            <h3 className={``}>Send us a Message</h3>
            {message && (
              <div
                className={
                  message.includes("successfully")
                    ? styles.messageSuccess
                    : styles.messageError
                }
              >
                {message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  className={styles.formInput}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
