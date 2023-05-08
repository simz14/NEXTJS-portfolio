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
          <TimelineBoxRight
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"2020-2022"}
            title={"Studying informatics in highschool."}
            description={
              "I started my programming journey with bases of programming and python."
            }
          />
          <TimelineBoxLeft
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"Summer 2022"}
            title={"Frontend"}
            description={
              "I became interested in the frontend part of programming. I decided to learn frontend technologies."
            }
          />
          <TimelineBoxRight
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"Oktober 2022"}
            title={"Improving my stack"}
            description={"Learning Typescript and NodeJS."}
          />
          <TimelineBoxLeft
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"December 2022"}
            title={"ReactJS"}
            description={
              "After better understanding of Javascript and DOM I decided to learn ReactJS for building complex web applications."
            }
          />

          <TimelineBoxRight
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"December-January 2023"}
            title={"Group project"}
            description={
              "In the programming bootcamp, we created a ticketportal application in a group of four people (SCRUM)."
            }
          />
          <TimelineBoxLeft
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"February 2023"}
            title={"Complex applications"}
            description={
              "After learning important concepts of React, I started to work on bigger and more complex applications."
            }
          />
          <TimelineBoxRight
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"April 2023"}
            title={"Improving portfolio with NextJs"}
            description={
              "After few months of making projects in React, I decided to learn NextJS and concepts of SSR and server components in React."
            }
          />
          <TimelineBoxLeft
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"Present"}
            title={"Practicing and looking for a job opportunity"}
            description={"Buildinig projects in NextJs."}
          />
        </div>
      </Container>
    </div>
  );
};

export default TimelineSection;
