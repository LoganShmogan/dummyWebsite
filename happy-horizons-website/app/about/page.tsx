import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  const values = [
    {
      title: "Nurturing Care",
      description:
        "Happy Horizons provides a safe, loving, and supportive environment where every child feels seen, valued, and cared for — just like family.",
    },
    {
      title: "Learning Through Play",
      description:
        "We believe children learn best through play, exploration, and discovery. Our fantastic staff inspire curiosity, creativity, and a lifelong love of learning.",
    },
    {
      title: "Respect and Inclusion",
      description:
        "We celebrate diversity and foster a sense of belonging. Every child, family, and staff member is treated with kindness, empathy, and respect.",
    },
    {
      title: "Partnership with Families",
      description:
        "Our staff foster strong, open relationships with families, working together to support each child's growth, development, and happiness.",
    },
    {
      title: "Safety and Wellbeing",
      description:
        "The health, safety, and emotional wellbeing of our children are always our top priorities. We maintain high standards of care and a secure, welcoming environment with well documented safety policies and procedures.",
    },
    {
      title: "Growth and Excellence",
      description:
        "The staff at Happy Horizons are committed to continuous learning, professional development, and improving the quality of our programs to provide the best possible start for every child.",
    },
    {
      title: "Joy and Community",
      description:
        "We believe childhood should be filled with laughter, friendship, and meaningful experiences. At Happy Horizons, we create a joyful community where children and families thrive together.",
    },
  ];

  const staff = [
    {
      name: "Francis",
      position: "Business Owner",
      bio: "Coming from a financial services background, I have worked for a range of large and medium-sized companies in New Zealand and overseas, covering the financial markets, accounting, payroll, financial compliance, and regulation. Stepping into the childcare sector is a meaningful new chapter for me—one that combines my business experience with a deep commitment to creating a nurturing, high-quality environment where children can learn, grow, and thrive. One of the main reasons I chose to purchase a childcare business is the support of my cousin Bernadette, who has many years of industry experience. She has been guiding me throughout this journey and will continue to provide vital expertise and support.",
      image: "/StaffPhoto/staff7.jpg",
    },
    {
      name: "Bernadette",
      position: "Industry Expert & Consultant",
      bio: "I have 23 years of experience in the early childhood industry, during which I have held several roles including managing preschool centres, teaching adult learners, and establishing a home-based childcare business. In 2017, I launched a home-based childcare service that has since grown to a team of 19 staff. I also have ownership in two OSCAR businesses, which provide before- and after-school care as well as school holiday programmes. In addition, I own an indoor playground and café, employing 12 staff across both operations. Alongside these responsibilities, I work as a consultant to local preschools, supporting teachers with their registrations, preparing for ministry reviews, and ensuring ongoing compliance with licensing criteria.",
      image: "/StaffPhoto/staff0.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.sectionHeader}>
          <h2 className={``}>Our Mission</h2>
          <div className={styles.storyContentWrapper}>
            <p>
              The mission of Happy Horizons is to foster a love of learning and
              a sense of wonder in every child. We provide a caring, engaging,
              and inclusive space that encourages curiosity, creativity, and
              confidence, helping each child grow toward bright and limitless
              horizons.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.ourStorySection}>
        <div className={styles.sectionHeader}>
          <h2>Our Story</h2>
          <p>
            From Financial Services to Early Childhood Education — A Journey of
            Purpose
          </p>
        </div>
        <div className={styles.storyContentWrapper}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p>
                Every business has a beginning, but ours started with something
                deeper: a desire to create meaningful impact. Before starting
                Happy Horizons, I spent many years working in the financial
                services world. It was a career built on numbers, systems, and
                strategic decision-making — skills that served me well but left
                me searching for something more fulfilling.
              </p>
              <p>
                I had always planned to leave the corporate world and run my own
                business and had been discussing the ECE industry with my cousin
                Bernadette who has been in this industry for quite some time and
                that was the spark that led me to early childhood education.
              </p>
              <p>
                What began as a curiosity soon became a calling. I realised that
                helping shape childrens earliest experiences — their confidence,
                their sense of belonging, their love of learning — was one of
                the most meaningful ways I could contribute to my community. So,
                I stepped away from the corporate world and into a completely
                new chapter.
              </p>
              <p>
                Its been an incredibly steep learning curve and the change of
                industries meant re-training, listening, learning, and building
                from the ground up. But with each small milestone I knew I was
                exactly where I was meant to be.
              </p>
              <p>Today, our center reflects everything I value:</p>
              <ul className={styles.storyList}>
                <li>
                  <strong>Warm, trusting relationships</strong> with families
                </li>
                <li>
                  <strong>Educators who feel empowered</strong> and passionate
                  about their work
                </li>
                <li>
                  <strong>
                    Spaces where children feel safe, seen, and celebrated
                  </strong>
                </li>
                <li>
                  <strong>A community that grows together</strong>
                </li>
              </ul>
              <p>
                Moving from financial services to early childhood may seem like
                a big leap, but for me, it was the most natural step toward a
                life of more purpose. This journey has taught me that success
                isnt just measured in numbers — its measured in happy children,
                supported families, and the little moments that shape brighter
                futures.
              </p>
              <div className={styles.signature}>
                <p className={styles.signatureName}>Francis Wolfgram</p>
                <p className={styles.signatureTitle}>Center Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className={styles.staffSection}>
        <div className={styles.sectionHeader}>
          <h2 className={``}>Our Team</h2>
          <p>Meet the passionate professionals behind Happy Horizons</p>
        </div>
        <div className={styles.staffGrid}>
          {staff.map((member, index) => (
            <div key={index} className={styles.staffCard}>
              <div className={styles.staffImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className={styles.staffHeadshot}
                />
              </div>
              <div className={styles.staffInfo}>
                <h3>{member.name}</h3>
                <div className={styles.position}>{member.position}</div>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={``}>Our Values</h2>
          <p>The principles that guide everything we do at Happy Horizons</p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
