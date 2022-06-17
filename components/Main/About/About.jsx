/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <h1>About <span style={{ color: "red" }}>Me</span> </h1>
      <p>
        I'm a FULL Stack (MERN) Web Developer. Currently I am working on Java
        Springboot. I'm a Pre - Final Year Student pursuing B.E. (Bachelor of
        Engineering).
      </p>
      <p>
        Most recent Experience is that currently I'm working as an SDE intern at
        MAF - Carrefour. Previously I have worked with StockPe and Admere
        Selvyn.
      </p>
      <p>I am very enthusiastic and ready to explore and learn with the advancement of Technology.</p>
    </div>
  );
};

export default About;
