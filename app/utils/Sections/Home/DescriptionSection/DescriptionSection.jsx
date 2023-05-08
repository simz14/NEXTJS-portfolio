"use client";
import styles from "./DescriptionSection.module.scss";
import Container from "../../../../components/Container/Container";
import ButtonExtra from "../../../../components/ButtonExtra/ButtonExtra";
import { motion } from "framer-motion";

const DescriptionSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.contentWrapper}
        >
          <div className={styles.description}>
            <h2>I am a FullStack developer with about 1 year of experience.</h2>
            <p>
              I'm a 20-year-old FullStack programmer. I started programming more
              than a year ago. Since then, I have been expanding my knowledge
              and continue to do so. I currently live in Trnava, but I come from
              Svidník, a city in eastern Slovakia.
            </p>
            <div className={styles.calculations}>
              <div className={styles.calculation}>
                <h3>10</h3>
                <p>Projects completed</p>
                <ButtonExtra>
                  <h3>Contact</h3>
                </ButtonExtra>
              </div>
              <div className={styles.calculation}>
                <h3>1 000 000+</h3>
                <p>lines of code written</p>
                <ButtonExtra>
                  <h3>Portfolio</h3>
                </ButtonExtra>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default DescriptionSection;
