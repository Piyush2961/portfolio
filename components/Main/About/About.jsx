import React from "react";
import styles from "./About.module.css";
import { RiBaseStationLine, RiCloudLine, RiCpuLine, RiShieldKeyholeLine } from "react-icons/ri";

const About = () => {
  const skills = [
    { 
      category: "Core Engineering", 
      icon: <RiCpuLine />,
      items: ["Java", "Spring Boot", "OOP", "Data Structures & Algorithms"] 
    },
    { 
      category: "Distributed Systems", 
      icon: <RiBaseStationLine />,
      items: ["Kafka", "Microservices", "Design Patterns", "Event-Driven Architecture"] 
    },
    { 
      category: "Storage & Cloud", 
      icon: <RiCloudLine />,
      items: ["MySQL", "Mongo DB", "Redis", "Microsoft Azure"] 
    },
    { 
      category: "System Design", 
      icon: <RiShieldKeyholeLine />,
      items: ["HLD", "LLD", "Scalability", "Observability (New Relic)"] 
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div data-reveal className="stagger-1">
              <span className="text-mono text-accent">// 01. PHILOSOPHY</span>
              <h2 className={styles.heading}>
                SYSTEMS THAT <br />
                <span className="text-outline">SCALES</span>
              </h2>
            </div>
            
            <div data-reveal className={`${styles.text} stagger-2`}>
              <p>
                I am Piyush Kumar, a Software Engineer II at GOTO Group, 
                where I specialize in building mission-critical identity 
                verification infrastructure within the OneKYC Team.
              </p>
              <p>
                My engineering philosophy is built on the foundation of 
                reliability and performance. I believe that a backend should 
                be invisible: so robust and efficient that it handles millions 
                of transactions with zero friction.
              </p>
              <p>
                From architecting real-time verification pipelines that slash 
                latency from days to seconds, to implementing global payment 
                systems across 11 countries, I thrive on solving complex 
                distributed system challenges.
              </p>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.skillsContainer}>
              <div className={styles.skillsHeader}>
                <span className="text-mono">SYS_CORE_SPECS.LOG</span>
              </div>
              <div className={styles.skillsGrid}>
                {skills.map((skill, i) => (
                  <div 
                    key={skill.category} 
                    data-reveal 
                    className={`${styles.skillCategory} stagger-${(i % 3) + 1}`}
                  >
                    <div className={styles.categoryHeader}>
                      {skill.icon}
                      <h3 className={styles.categoryTitle}>{skill.category}</h3>
                    </div>
                    <ul className={styles.skillList}>
                      {skill.items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
