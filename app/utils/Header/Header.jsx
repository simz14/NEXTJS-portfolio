"use client";

import React from "react";
import Container from "../../components/Container/Container";
//import { BsGithub, BsLinkedin } from "react-icons/bs";
import ButtonExtra from "../../components/ButtonExtra/ButtonExtra";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
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
                <span>PORTFOLIO</span>
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
                <span>TIMELINE</span>
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
