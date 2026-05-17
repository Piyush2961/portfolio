import React from "react";
import styles from "./Experience.module.css";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      period: "SEPT 2025 — PRESENT",
      role: "Software Engineer - 2",
      company: "GOTO GROUP",
      logo: "/goto.jpeg",
      location: "Bengaluru, India",
      highlights: [
        "Executed end-to-end KYD (Know Your Driver) initiative, slashing processing latency from days to seconds via real-time verification pipelines.",
        "Architected a standalone Document Service from scratch to centralize secure storage and enable asynchronous retrieval for downstream services.",
        "Optimized system throughput and reliability within the OneKYC Team, focusing on high-availability infrastructure."
      ]
    },
    {
      period: "JULY 2023 — SEPT 2025",
      role: "Software Development Engineer - 1",
      company: "MAJID AL FUTTAIM",
      logo: "/maf.jpeg",
      location: "Gurugram, India",
      highlights: [
        "Architected and implemented a global payment system across 11 countries, significantly reducing transaction failures and improving scalability.",
        "Delivered Credit Card Wallet Top-up feature end-to-end (Cybersource & Checkout.com), driving a 10% increase in e-commerce transactions.",
        "Owned Cart Bundling and Free Delivery features from ideation to production, boosting average cart value by 30% and total revenue by 20%."
      ]
    },
    {
      period: "MARCH 2022 — JUNE 2023",
      role: "Software Developer Engineer Intern",
      company: "MAJID AL FUTTAIM",
      logo: "/maf.jpeg",
      location: "Gurugram, India",
      highlights: [
        "Delivered BNPL (Buy Now, Pay Later) integration from scratch, including core features like Resend OTP and Refund processing.",
        "Configured and delivered Payments Monitoring Dashboards with New Relic, providing real-time visibility across gateways to improve observability."
      ]
    },
    {
      period: "NOV 2021 — JAN 2022",
      role: "Web Development Intern",
      company: "STOCKPE",
      logo: "/stockpe.jpeg",
      location: "Remote, India",
      highlights: [
        "Engineered an Admin Panel from scratch using React.js, integrating multi-tier CRUD APIs to streamline internal business operations.",
        "Developed an animated, interactive landing page leveraging modern frontend optimizations to elevate brand presence."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div data-reveal className="stagger-1">
          <span className="text-mono text-accent">{"// 02. TRAJECTORY"}</span>
          <h2 className={styles.heading}>
            PROFESSIONAL <br />
            <span className="text-outline">HISTORY</span>
          </h2>
        </div>

        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              data-reveal 
              className={`${styles.item} stagger-${(i % 3) + 1}`}
            >
              <div className={styles.itemHeader}>
                <div className={styles.companyInfo}>
                  <div className={styles.logoWrapper}>
                    <Image 
                      src={exp.logo} 
                      alt={exp.company} 
                      width={48} 
                      height={48} 
                      className={styles.logo}
                    />
                  </div>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>
                      {exp.company} <span className={styles.location}>— {exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={styles.details}>
                <ul className={styles.highlights}>
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
