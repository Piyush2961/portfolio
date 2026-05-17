import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [Component]);

  return (
    <>
      <Head>
        <title>PIYUSH KUMAR // BACKEND ARCHITECT & SYSTEMS ENGINEER</title>
        <meta name="description" content="Piyush Kumar — Software Engineer II at GOTO Group. Architecting high-availability distributed systems and mission-critical fintech infrastructure." />
        <link rel="icon" href="/removedbg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div className="grain" />
      <Navbar />
      <main> 
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
