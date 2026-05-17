import React from "react";
import styles from "./Main.module.css";
import Heading from "./Heading/Heading";
import About from "./About/About";
import SystemLogs from "./SystemLogs/SystemLogs";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill, RiYoutubeFill, RiTerminalLine } from "react-icons/ri";

const Main = () => {
  return (
    <main className={styles.main}>
      <Heading />
      <About />
      <SystemLogs />
      <Experience />
      <Projects />
      <Education />

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div data-reveal className="stagger-1">
              <div className={styles.footerLabel}>
                <RiTerminalLine /> INITIALIZE_HANDSHAKE
              </div>
              <h2 className={styles.footerHeading}>
                LET&apos;S BUILD <br />
                <span className="text-outline">THE FUTURE</span>
              </h2>
              <a href="mailto:piyushkumar2961@gmail.com" className={styles.largeEmail}>
                piyushkumar2961@gmail.com
              </a>
            </div>

            <div className={styles.footerBottom}>
              <div className={styles.socials}>
                <a href="https://github.com/Piyush2961" target="_blank" rel="noreferrer"><RiGithubFill /></a>
                <a href="https://linkedin.com/in/piyush2961" target="_blank" rel="noreferrer"><RiLinkedinBoxFill /></a>
                <a href="https://twitter.com/Piyush2961" target="_blank" rel="noreferrer"><RiTwitterFill /></a>
                <a href="https://youtube.com/@piyushkumar20023" target="_blank" rel="noreferrer"><RiYoutubeFill /></a>
              </div>
              <div className={styles.copyright}>
                <span className="text-accent">© 2026 PIYUSH KUMAR.</span>
                <span className={styles.tagline}> ENGINEERED FOR PERFORMANCE. [v2.0.4]</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Main;
