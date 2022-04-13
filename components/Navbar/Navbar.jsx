import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { RiMenu4Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import Radium, { StyleRoot } from "radium";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const data = [
    "Kumar ",
    "techy ",
    "web ",
    "developer ",
    "competitive ",
    "coder ",
  ];
  const [write, setWrite] = useState();
  // let write = "";

  const delay = async (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const cleanWrite = async (s) => {
    setTimeout(() => {
      if (s?.length > 0) {
        setWrite(s.slice(0, s.length - 1));
        cleanWrite(s.slice(0, s.length - 1));
      }
    }, 500);
  };

  async function makeALoopWait() {
    for (let i = 0; i < data.length; i += 1) {
      console.log(data[i]);
      cleanWrite(data[i]);

      await delay(data[i].length * 500);
    }
    makeALoopWait();
  }
  useEffect(() => {
    makeALoopWait();
  }, []);

  const close = {
    "@media (max-width: 900px)": {
      transform: "translateX(-150vw) rotate(90deg) translateY(30vh)",
      transition: "all .7s ease-in",
    },
  };

  const open = {
    "@media (max-width: 900px)": {
      transform: "translateX(0rem)",
      transition: "all .7s ease-out",
    },
  };

  const changeStyle = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <StyleRoot>
      <div className={styles.main}>
        <div className={styles.Navbar}>
          <h1>
            Piyush.<span style={{ color: "red" }}>{write}</span>
          </h1>

          <div className={styles.hamburger}>
            {!closeMenu ? (
              <CgClose className={styles.open} onClick={changeStyle} />
            ) : (
              <RiMenu4Line className={styles.close} onClick={changeStyle} />
            )}
          </div>
        </div>

        <div className={styles.innersec} style={closeMenu ? close : open}>
          <p>Home</p>
          <p>Projects</p>
          <p>About</p>
          <button>Contact Me</button>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Radium(Navbar);
