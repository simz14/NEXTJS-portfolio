"use client";
import ColoredBox from "../../../../components/ColoredBox/ColoredBox";
import Container from "../../../../components/Container/Container";
import styles from "./SkillsSection.module.scss";
import cvphoto from "../../../../../public/ofiSimona.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
/*import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiJest,
  SiMui,
  SiMysql,
  SiReact,
  SiReacthookform,
  SiScrollreveal,
  SiSequelize,
  SiStyledcomponents,
  SiSwiper,
  SiTypescript,
} from "react-icons/si";
import { GiDonut } from "react-icons/gi";
import { TbBrandNextjs } from "react-icons/tb";*/
import Tools from "../../../../components/ToolsComponent/Tools";

const SkillsSection = () => {
  return (
    <div className={styles.wrapper} id="skills">
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>MY SKILLS</h1>
          <div className={styles.content}>
            <div className={styles.boxes}>
              <ColoredBox color="#9bd3d0">
                <h4>HTML</h4>
              </ColoredBox>
              <ColoredBox color="#ffc107">
                <h4>CSS</h4>
              </ColoredBox>
              <ColoredBox color="#feccb5">
                <h4>JAVASCRIPT</h4>
              </ColoredBox>
              <ColoredBox color="#92b5ff">
                <h4>TYPESCRIPT</h4>
              </ColoredBox>
              <ColoredBox color="#c4d39b">
                <h4>REACT</h4>
              </ColoredBox>
              <ColoredBox color="#d2ceff">
                <h4>NEXTJS</h4>
              </ColoredBox>
              <ColoredBox color="#9bd3d0">
                <h4>NODEJS</h4>
              </ColoredBox>
              <ColoredBox color="#ffc107">
                <h4>EXPRESS</h4>
              </ColoredBox>
              <ColoredBox color="#feccb5">
                <h4>SQL</h4>
              </ColoredBox>
              <ColoredBox color="#92b5ff">
                <h4>JEST</h4>
              </ColoredBox>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.imageWrapper}
            >
              <Image className={styles.cvphoto} src={cvphoto} alt="simona" />
            </motion.div>
          </div>
        </div>
      </Container>
      <Tools>
        <div className={styles.child}>
          <h5>STYLED COMPONENTS</h5>
        </div>
        <div className={styles.child}>
          <h5>MUI</h5>
        </div>
        <div className={styles.child}>
          <h5>REACT HOOK FORM</h5>
        </div>
        <div className={styles.child}>
          <h5>SEQUELIZE</h5>
        </div>
        <div className={styles.child}>
          <h5>SWIPER</h5>
        </div>
        <div className={styles.child}>
          <h5>SCROLLREVEALJS</h5>
        </div>
        <div className={styles.child}>
          <h5>GIT</h5>
        </div>
        <div className={styles.child}>
          <h5>SWEET ALERT</h5>
        </div>
      </Tools>
    </div>
  );
};

export default SkillsSection;
