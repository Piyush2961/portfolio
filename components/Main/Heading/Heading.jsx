import styles from "./Heading.module.css";
import Image from "next/image";
import WaveAnimation from "./../../animation/WaveAnimation";
const Heading = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.first}>
          <h2>
            {" "}
            <span style={{ color: "#afc3db" }}>Hi! I Am</span> <br />
            <span style={{ color: "#ffa200" }}>Piyush Kumar</span>
          </h2>
          <p>
            I am a Full Stack Developer, Competitive Programmer and a Quick
            Learner.
          </p>
          <button>Hire Me</button>
        </div>

        <div className={styles.second}>
          <WaveAnimation />
          <div className={styles.myImageDiv}>
            <Image
              className={styles.realImage}
              src="/myImage.jpg"
              alt="me"
              width="400"
              height="550"
            />
            {/* <WaveAnimation /> */}
          </div>

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
              <p
                style={{
                  fontSize: ".9rem",
                  margin: "auto",
                  transform: "translateX(4%)",
                }}
              >
                {" "}
                <span className={styles.hackbenchers}>
                  Hackbenchers #4
                </span>{" "}
                {"\n"} Winner
              </p>
            </div>
          </div>

          <div className={styles.tagupright}>
            <div>
              <Image
                className={styles.experienced}
                src="/exp.png"
                alt="me"
                width="80"
                height="90"
                style={{ borderRadius: "25%", transform: "translateY(3%)" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: ".9rem",
                  margin: "auto",
                  transform: "translateX(4%)",
                }}
              >
                {" "}
                <span className={styles.stockpe}>Experienced</span> {"\n"}{" "}
                Stockpe
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
