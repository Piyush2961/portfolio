/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      {/* About me  */}
      <h1>
        About <span style={{ color: "red" }}>Me</span>{" "}
      </h1>
      <p>
        Greetings! I'm Piyush Kumar, a passionate Software Development Engineer
        (SDE) currently contributing my skills and expertise to the dynamic
        world of payments technology at Majid Al Futtaim.
      </p>

      {/* Professional Joourney  */}
      {/* <h1>Professional Journey </h1>
      <p>
        My journey in the realm of software development has been nothing short
        of exhilarating. I've had the privilege of being part of innovative
        teams that drive technological excellence. My current role at Majid Al
        Futtaim has honed my abilities as an SDE, where I play a pivotal role in
        crafting and enhancing systems within the payments landscape. It's an
        exciting space where every day brings new challenges and opportunities
        for growth.
      </p> */}
    </div>
  );
};

export default About;
