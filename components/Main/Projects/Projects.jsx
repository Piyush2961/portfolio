import React from "react";
import styles from "./Projects.module.css";
import { RiArrowRightUpLine, RiDatabaseLine, RiServerLine } from "react-icons/ri";

const Projects = () => {
  const projects = [
    {
      title: "GOLDEN THEORY",
      category: "Platform Development",
      desc: "Interactive, animated Golden Ratio platform built for a Hackathon. Features a real-time calculator for instant data analysis and visualization.",
      tech: ["React.js", "Framer Motion", "Data Analysis"],
      link: "https://goldentheory.netlify.app/",
      type: "PLATFORM"
    },
    {
      title: "MOCKAPIGEN",
      category: "Developer Tooling",
      desc: "Instantly design and host mock endpoints with 24h auto-deletion and serverless performance.",
      tech: ["Hono.js", "Cloudflare Workers", "Serverless"],
      link: "https://mockapigen.com/",
      type: "ARCH"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div data-reveal className="stagger-1">
          <span className="text-mono text-accent">// 03. ARTIFACTS</span>
          <h2 className={styles.heading}>
            TECHNICAL <br />
            <span className="text-outline">DEPLOYMENTS</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <a 
              href={project.link} 
              key={i} 
              className={`${styles.projectCard} stagger-${(i % 2) + 1}`}
              data-reveal
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cardHeader}>
                <div className={styles.typeTag}>
                  {project.type === "ARCH" ? <RiServerLine /> : <RiDatabaseLine />}
                  <span>{project.type}</span>
                </div>
                <RiArrowRightUpLine className={styles.icon} />
              </div>
              
              <div className={styles.cardBody}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
              </div>
              
              <div className={styles.cardFooter}>
                <div className={styles.techStack}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
