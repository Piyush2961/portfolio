import styles from "./Heading.module.css";
import Image from "next/image";
const Heading = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <h2>
          {" "}
          <span style={{ color: "#222d4b" }}>Hi! I Am</span> <br />
          <span style={{ color: "#ffa200" }}>Piyush Kumar</span>
        </h2>
        <p>
          I am a Full Stack Developer, Competitive Programmer and a Quick
          Learner.
        </p>
        <button>Hire Me</button>
      </div>

      <div className={styles.second}>
        <Image
          className={styles.image}
          src="/profile.png"
          alt="me"
          width="500"
          height="620"
        />
        <div className={styles.hack}>
          <div>
            <Image
              className={styles.hackerearth}
              src="/hackerearth.png"
              alt="me"
              width="70"
              height="70"
            />
          </div>
          <div>
              <p style={{ fontSize: ".9rem", margin: "auto", transform: "translateX(4%)" }}> <span className={styles.hackbenchers} >Hackbenchers #4</span> {"\n"} Winner</p>
          </div>
        </div>

        <div className={styles.tagupright}>
          <div>
            <Image
              className={styles. hackerearth}
              src="/exp.png"
              alt="me"
              width="80"
              height="90"
              style={{ borderRadius: "25%", transform: "translateY(3%)" }}
            />
          </div>
          <div>
              <p style={{ fontSize: ".9rem", margin: "auto", transform: "translateX(4%)" }}> <span className={styles.stockpe} >Experienced</span> {"\n"} Stockpe</p>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Heading;
