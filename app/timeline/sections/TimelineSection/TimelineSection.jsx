"use client";
import { motion } from "framer-motion";
import styles from "./TimelineSection.module.scss";
import Container from "@/app/components/Container/Container";

const TimelineSection = () => {
  return (
    <div className={styles.bcg}>
      <Container>
        <div className={styles.wrapper}>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.boxWrapper}
          >
            <div className={styles.line}></div>
            <div className={styles.box}>
              <p>2020-2022</p>
              <h1>Studying computer science in highschool.</h1>
              <h2>
                Started my programming journey with bases of programming and
                python.
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.boxWrapper}
          >
            <div className={styles.line}></div>
            <div className={styles.box}>
              <p>Summer 2022</p>
              <h1>Frontend progtamming</h1>
              <h2>
                I became interested in front-end programming and started with
                html, css.
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.boxWrapper}
          >
            <div className={styles.line}></div>
            <div className={styles.box}>
              <p>Oktober 2022</p>
              <h1>Started fullstack course at Green Fox Academy</h1>
              <h2>
                I decided that I want to learn with confidence and from seniors.
              </h2>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default TimelineSection;
