import styles from "./Main.module.css";
import Heading from "./Heading/Heading";
import About from "./About/About";
import Experience from "./Experience/Experience";

const Main = () => {
  return (
    <div className={styles.main}>
      <Heading />
      <About />
      <Experience />
    </div>
  );
};

export default Main;
