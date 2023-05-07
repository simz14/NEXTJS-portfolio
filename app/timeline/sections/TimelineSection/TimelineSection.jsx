"use client";
import { motion } from "framer-motion";
import styles from "./TimelineSection.module.scss";
import Container from "@/app/components/Container/Container";
import TimelineBoxLeft from "../../components/TimelineBoxLeft";
import TimelineBoxRight from "../../components/TimelineBoxRight";

const TimelineSection = () => {
  return (
    <div className={styles.bcg}>
      <Container>
        <div className={styles.wrapper}>
          <TimelineBoxLeft
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
          />
          <TimelineBoxRight
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
          />
          <TimelineBoxLeft
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
          />
          <TimelineBoxRight
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
          />
        </div>
      </Container>
    </div>
  );
};

export default TimelineSection;
