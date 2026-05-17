import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { RiMenuLine, RiCloseLine, RiCompassLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { id: "01", name: "About", target: "about" },
    { id: "02", name: "Experience", target: "experience" },
    { id: "03", name: "Projects", target: "projects" },
  ];

  const handleNavClick = (target) => {
    const element = document.getElementById(target);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: target === "home" ? 0 : offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${isOpen ? styles.navOpen : ""}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo} onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsOpen(false);
        }}>
          <span className={styles.prefix}>0x</span>PIYUSH<span className={styles.dot}>.SYS</span>
        </div>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => handleNavClick(link.target)} className={styles.navItem}>
              <span className={styles.linkId}>{link.id}</span>
              {link.name}
            </button>
          ))}
          <a href="mailto:piyushkumar2961@gmail.com" className={styles.contactBtn}>
            INIT_CONTACT
          </a>
        </div>

        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ""}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link, index) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.target)} 
              className={styles.mobileNavItem}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className={styles.mobileLinkId}>{link.id}</span>
              {link.name}
            </button>
          ))}
          <a 
            href="mailto:piyushkumar2961@gmail.com" 
            className={`${styles.mobileNavItem} text-accent`}
            onClick={() => setIsOpen(false)}
          >
            INIT_CONTACT
          </a>
        </div>
        <div className={styles.menuFooter}>
          <RiCompassLine /> BENGALURU_IND
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
