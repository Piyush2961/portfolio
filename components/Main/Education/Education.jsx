import React from "react";
import styles from "./Education.module.css";
import { RiAwardLine } from "react-icons/ri";

const Education = () => {
  const education = [
    {
      school: "CHITKARA UNIVERSITY",
      degree: "B.E. IN COMPUTER SCIENCE",
      period: "JUNE 2019 — JULY 2023",
      location: "Patiala, India",
      info: "Specialization in Distributed Systems & Core Engineering"
    },
    {
      school: "ARMY PUBLIC SCHOOL",
      degree: "12TH STANDARD",
      period: "FEB 2018 — JUNE 2019",
      location: "Haryana, India",
      info: "Science & Mathematics Foundation"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div data-reveal className="stagger-1">
          <span className="text-mono text-accent">{"// 04. ACADEMIC"}</span>
          <h2 className={styles.heading}>
            EDUCATION <br />
            <span className="text-outline">FOUNDATION</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {education.map((edu, i) => (
            <div 
              key={i} 
              data-reveal 
              className={`${styles.eduCard} stagger-${(i % 2) + 1}`}
            >
              <div className={styles.cardHeader}>
                <RiAwardLine className={styles.icon} />
                <span className={styles.period}>{edu.period}</span>
              </div>
              <h3 className={styles.school}>{edu.school}</h3>
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.footer}>
                <span className={styles.location}>{edu.location}</span>
                <span className={styles.info}>{edu.info}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.awardsSection} data-reveal>
          <div className={styles.awardsHeader}>
            <span className="text-mono text-accent">{"// RECOGNITION"}</span>
          </div>
          <div className={styles.awardsGrid}>
            <div className={styles.awardItem}>
              <span className={styles.awardTitle}>WINNER HACKBENCHERS #4</span>
              <span className={styles.awardSource}>HACKATHON</span>
            </div>
            <div className={styles.awardItem}>
              <span className={styles.awardTitle}>LETTER OF RECOMMENDATION</span>
              <span className={styles.awardSource}>STOCKPE</span>
            </div>
            <div className={styles.awardItem}>
              <span className={styles.awardTitle}>INTERNSHIP CERTIFICATE</span>
              <span className={styles.awardSource}>STOCKPE</span>
            </div>
            <div className={styles.awardItem}>
              <span className={styles.awardTitle}>INTERNSHIP CERTIFICATE</span>
              <span className={styles.awardSource}>ADMERE SELVYN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
