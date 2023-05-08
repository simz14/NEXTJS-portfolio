"use client";

import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
//import { BsGithub, BsLinkedin } from "react-icons/bs";
import ButtonExtra from "../../components/ButtonExtra/ButtonExtra";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  const [headerBcg, setHeaderBcg] = useState(false);

  const onScroll = () => {
    const { pageYOffset } = window;
    setHeaderBcg(pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  console.log(headerBcg);
  return (
    <div
      style={{
        backgroundColor: headerBcg > 30 ? "white" : "transparent",
        boxShadow:
          headerBcg > 30 ? "0 0.125rem 0.25rem rgba(55, 55, 55, .075)" : "none",
      }}
      className={styles.header}
    >
      <Container>
        <nav className={styles.contentWrapper}>
          <div className={styles.home}>
            <div className={styles.line}>
              <Link href="/">
                <span>SIMZ</span>
              </Link>
            </div>
          </div>
          <div className={styles.sections}>
            <div className={`${styles.hide} ${styles.line}`}>
              <Link href="#skills">
                <span>SKILLS</span>
              </Link>
            </div>
            <div className={`${styles.hide} ${styles.line}`}>
              <Link href="#portfolio">
                <span>PROJECTS</span>
              </Link>
            </div>
            <div className={`${styles.hide} ${styles.line}`}>
              <Link href="#contact">
                <span>CONTACT</span>
              </Link>
            </div>
          </div>
          <div className={styles.buttons}>
            <ButtonExtra>
              <Link href="/timeline">
                <span>MY JOURNEY</span>
              </Link>
            </ButtonExtra>

            <ButtonExtra>
              <a target="blank" href="https://github.com/simz14"></a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/simona-zozu%C4%BEakov%C3%A1-003639249/"
              ></a>
            </ButtonExtra>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
