"use client";
import ColoredBox from "../../../../components/ColoredBox/ColoredBox";
import Container from "../../../../components/Container/Container";
import styles from "./SkillsSection.module.scss";
import cvphoto from "../../../../../public/ofiSimona.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiGit, SiJest,SiSwiper,SiScrollreveal,SiJirasoftware, SiMui, SiMysql, SiReact, SiReacthookform, SiSequelize, SiStyledcomponents, SiTailwindcss, SiTypescript, SiStorybook, SiNextdotjs, SiNextintl, SiNodedotjs } from "react-icons/si";
import { GiDonut } from "react-icons/gi";
import Tools from "../../../../components/ToolsComponent/Tools";
import { TbBrandNextjs } from "react-icons/tb";

const SkillsSection = () => {
  return (
    <div className={styles.wrapper} id="skills">
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>MY SKILLS</h1>
          <div className={styles.content}>
            <div className={styles.boxes}>
              {/* Frontend Skills */}
              <ColoredBox color="#9bd3d0">
                <SiReact />
                <h4>REACT</h4>
              </ColoredBox>
              <ColoredBox color="#ffc107">
                <SiNextdotjs />
                <h4>NEXTJS</h4>
              </ColoredBox>
              <ColoredBox color="#feccb5">
                <SiTypescript />
                <h4>TYPESCRIPT</h4>
              </ColoredBox>
              <ColoredBox color="#c4d39b">
                <SiTailwindcss />
                <h4>TAILWIND</h4>
              </ColoredBox>
              <ColoredBox color="#ffc107">
                <SiStorybook />
                <h4>STORYBOOK</h4>
              </ColoredBox>
              <ColoredBox color="#92b5ff">
                <AiFillHtml5 />
                <h4>HTML</h4>
              </ColoredBox>
              <ColoredBox color="#c4d39b">
                <IoLogoCss3 />
                <h4>CSS</h4>
              </ColoredBox>

              {/* Backend Skills */}
              <ColoredBox color="#feccb5">
                <SiNodedotjs />
                <h4>NODEJS</h4>
              </ColoredBox>
              <ColoredBox color="#ffc107">
                <SiExpress />
                <h4>EXPRESS</h4>
              </ColoredBox>
              <ColoredBox color="#9bd3d0">
                <SiMysql />
                <h4>MYSQL</h4>
              </ColoredBox>

              {/* Testing & Tools */}
              <ColoredBox color="#feccb5">
                <SiJest />
                <h4>JEST</h4>
              </ColoredBox>
              <ColoredBox color="#92b5ff">
                <SiGit />
                <h4>GIT</h4>
              </ColoredBox>
              <ColoredBox color="#92b5ff">
                <SiReacthookform />
                <h4>REACT HOOK FORM</h4>
              </ColoredBox>
              <ColoredBox color="#c4d39b">
                <SiSequelize />
                <h4>SEQUELIZE</h4>
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
          <SiStyledcomponents />
          <h5>STYLED COMPONENTS</h5>
        </div>
        <div className={styles.child}>
          <SiMui />
          <h5>MUI</h5>
        </div>
        <div className={styles.child}>
          <SiSwiper />
          <h5>SWIPER</h5>
        </div>
        <div className={styles.child}>
          <SiScrollreveal />
          <h5>SCROLLREVEALJS</h5>
        </div>
        <div className={styles.child}>
          <GiDonut />
          <h5>SWEET ALERT</h5>
        </div>
        <div className={styles.child}>
          <SiJirasoftware />
          <h5>JIRA</h5>
        </div>
      </Tools>
    </div>
  );
};

export default SkillsSection;
