import Head from "next/head";
import Main from "../components/Main/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}
