import React from "react";
import styles from "./Heading.module.css";
import Image from "next/image";
import { RiArrowRightLine, RiTerminalBoxLine } from "react-icons/ri";

const Heading = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div data-reveal className="stagger-1">
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              <span className="text-mono">{"SYS.STATUS: OPTIMIZED // GOTO GROUP"}</span>
            </div>
          </div>
          
          <div className={styles.titleWrapper}>
            <h1 data-reveal className={`${styles.title} stagger-2`}>
              PIYUSH <br /> 
              <span className="text-outline">KUMAR</span>
            </h1>
            <div className={styles.metaAnnotations}>
              <div className="text-mono">[SOFTWARE ENGINEER II]</div>
              <div className="text-mono">[BACKEND ARCHITECT]</div>
              <div className="text-mono">[SYSTEMS ENGINEER]</div>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <div data-reveal className={`${styles.descWrapper} stagger-3`}>
              <p className={styles.description}>
                Architecting high-performance, distributed backend systems 
                and mission-critical infrastructure. Specialized in building 
                scalable microservices, real-time data pipelines, and 
                resilient fintech ecosystems.
              </p>
              <div className={styles.ctaGroup}>
                <button 
                  className="btn btn-primary"
                  onClick={() => window.open('mailto:piyushkumar2961@gmail.com')}
                >
                  INITIALIZE CONNECT <RiArrowRightLine />
                </button>
              </div>
            </div>

            <div data-reveal className={`${styles.profileWrapper} stagger-2`}>
              <div className={styles.imageBox}>
                <Image 
                  src="/profile_new.jpg" 
                  alt="Piyush Kumar" 
                  width={200} 
                  height={200} 
                  className={styles.profileImage}
                  priority
                />
                <div className={styles.imageLabel}>0x2961.SYS</div>
              </div>
              <div className={styles.location}>
                <RiTerminalBoxLine /> {"BENGALURU // 12.9716° N, 77.5946° E"}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Schematic */}
      <div className={styles.schematic}>
        <div className={styles.lineH}></div>
        <div className={styles.lineV}></div>
        <div className={styles.coordinate}>0.0.0.1</div>
      </div>
    </section>
  );
};

export default Heading;
