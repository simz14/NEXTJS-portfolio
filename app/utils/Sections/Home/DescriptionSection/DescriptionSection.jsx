"use client";
import styles from "./DescriptionSection.module.scss";
import Container from "../../../../components/Container/Container";
import ButtonExtra from "../../../../components/ButtonExtra/ButtonExtra";
import { motion } from "framer-motion";
import Link from "next/link";

const DescriptionSection = () => {
  const birthdate = new Date(2002, 10, 11);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthdate.getFullYear();

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
            <h2>I’m a {age}-year-old developer with a strong focus on frontend development, though I also have experience in backend technologies.</h2>
            <p>
 I began my programming journey in 2022 and have been continuously expanding my skill set ever since. Originally from Svidník, a city in eastern Slovakia, I currently reside in Trnava. I’m passionate about building seamless and dynamic web applications and am always eager to learn and grow in both frontend and backend technologies.
            </p>
            <div className={styles.calculations}>
              <div className={styles.calculation}>
                <h3>14</h3>
                <p>Projects completed</p>
                <Link href="#contact">
                  <ButtonExtra>
                    <h3>Contact</h3>
                  </ButtonExtra>
                </Link>
              </div>
              <div className={styles.calculation}>
                <h3>1 000 000+</h3>
                <p>lines of code written</p>
                <Link href="#portfolio">
                  <ButtonExtra>
                    <h3>Portfolio</h3>
                  </ButtonExtra>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default DescriptionSection;
