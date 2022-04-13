import styles from "./Heading.module.css";
import Image from "next/image";
const Heading = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <h2> <span style={{ color: "#222d4b" }}>Hi! I Am</span> <br/>
            <span style={{ color: "#ffa200" }}>Piyush Kumar</span></h2>
        <p>
          I am a Full Stack Developer, Competitive Programmer and a Quick
          Learner.
        </p>
        <button>Hire Me</button>
      </div>

      <div className={styles.second}>
        <Image className={styles.image} src="/profile.png" alt="me" width="500" height="600" />
      </div>
    </div>
  );
};

export default Heading;
