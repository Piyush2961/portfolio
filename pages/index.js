import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <div style={{ zIndex: "0" }}>
        <Main />
      </div>
    </div>
  );
}
