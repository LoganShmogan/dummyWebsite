import styles from './page.module.css';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      title: "Nurturing Care",
      description: "Happy Horizons provides a safe, loving, and supportive environment where every child feels seen, valued, and cared for — just like family."
    },
    {
      title: "Learning Through Play",
      description: "We believe children learn best through play, exploration, and discovery. Our fantastic staff inspire curiosity, creativity, and a lifelong love of learning."
    },
    {
      title: "Respect and Inclusion",
      description: "We celebrate diversity and foster a sense of belonging. Every child, family, and staff member is treated with kindness, empathy, and respect."
    },
    {
      title: "Partnership with Families",
      description: "Our staff foster strong, open relationships with families, working together to support each child's growth, development, and happiness."
    },
    {
      title: "Safety and Wellbeing",
      description: "The health, safety, and emotional wellbeing of our children are always our top priorities. We maintain high standards of care and a secure, welcoming environment with well documented safety policies and procedures."
    },
    {
      title: "Growth and Excellence",
      description: "The staff at Happy Horizons are committed to continuous learning, professional development, and improving the quality of our programs to provide the best possible start for every child."
    },
    {
      title: "Joy and Community",
      description: "We believe childhood should be filled with laughter, friendship, and meaningful experiences. At Happy Horizons, we create a joyful community where children and families thrive together."
    }
  ];

  return (
    <div className={styles.container}>
      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Mission</h2>
          <p>The mission of Happy Horizons is to foster a love of learning and a sense of wonder in every child. We provide a caring, engaging, and inclusive space that encourages curiosity, creativity, and confidence, helping each child grow toward bright and limitless horizons.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Values</h2>
          <p>The principles that guide everything we do at Happy Horizons</p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.cardNumber}>{index + 1}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}