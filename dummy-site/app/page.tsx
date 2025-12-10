import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

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
              objectFit: "cover",
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
              objectFit: "contain",
            }}
            priority
          />
        </div>
      </section>

      {/* CTA Cards Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaGrid}>
          <div className={`${styles.ctaCard} ${styles.aboutCard}`}>
            <h3 className={``}>About Us</h3>
            <p>
              Learn more about our story, our team, and what makes Happy
              Horizons special
            </p>
            <Link className={styles.ctaButton} href="/about">
              Our Story
            </Link>
          </div>
          <div className={`${styles.ctaCard} ${styles.enrollCard}`}>
            <h3 className={``}>Enroll Now</h3>
            <p>Join Happy and give your child the best start in life</p>
            <Link className={styles.ctaButton} href="/enrolment">
              Start Enrolment
            </Link>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <section className={styles.offerSection}>
        <div className={styles.offerContainer}>
          <h2 className={`${styles.offerHeading} `}>What We Offer</h2>
          <div className={styles.offerGrid}>
            {/* Row 1 */}
            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                {/* Replace with your actual icon */}
                <div className={styles.iconPlaceholder}>🎨</div>
              </div>
              <h3 className={``}>Creative Arts</h3>
              <p>
                Engaging art activities that encourage self-expression and
                develop fine motor skills through painting, drawing, and crafts.
              </p>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <div className={styles.iconPlaceholder}>📚</div>
              </div>
              <h3 className={``}>Early Literacy</h3>
              <p>
                Building foundational reading skills through storytime, phonics,
                and interactive language activities.
              </p>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <div className={styles.iconPlaceholder}>🔢</div>
              </div>
              <h3 className={``}>Math & Science</h3>
              <p>
                Hands-on exploration of numbers, patterns, and scientific
                concepts through play-based learning.
              </p>
            </div>

            {/* Row 2 */}
            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <div className={styles.iconPlaceholder}>🏃‍♂️</div>
              </div>
              <h3 className={``}>Physical Development</h3>
              <p>
                Structured physical activities that promote coordination,
                balance, and healthy exercise habits.
              </p>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <div className={styles.iconPlaceholder}>🎵</div>
              </div>
              <h3 className={``}>Music & Movement</h3>
              <p>
                Rhythm, dance, and musical activities that enhance auditory
                skills and creative expression.
              </p>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerIcon}>
                <div className={styles.iconPlaceholder}>🌳</div>
              </div>
              <h3 className={``}>Outdoor Play</h3>
              <p>
                Safe, supervised outdoor activities that encourage exploration
                and connection with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyCard}>
          <div className={styles.storyImage}>
            <Image
              src="/companyLogo.jpg"
              alt="Happy Horizons Story"
              width={400}
              height={300}
              style={{
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
          <div className={styles.storyContent}>
            <h2 className={``}>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Link href="/about" className={styles.storyButton}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Staff Section */}
      <section className={styles.staffSection}>
        <div className={`${styles.staffCard} ${styles.reverseLayout}`}>
          <div className={styles.staffContent}>
            <h2 className={``}>Our Family</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Link href="/about" className={styles.staffButton}>
              Meet Our Team
            </Link>
          </div>
          <div className={styles.staffImage}>
            <Image
              src="/companyLogo.jpg"
              alt="Happy Horizons Staff"
              width={400}
              height={300}
              style={{
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
