import React from "react";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import { FaDiscord, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.links}>
            <a href="https://www.facebook.com/simona.zozulakova">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/simaz14/">
              <FaInstagram />
            </a>
            <a href=" https://bit.ly/3JhfA7y">
              <FaDiscord />
            </a>
          </div>
          <div>
            <p>Created by Simona</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;