import styles from "./TimelineSection.module.scss";
import Container from "../../../components/Container/Container";
import TimelineBox from "../../components/TimelineBox";

const TimelineSection = () => {
  return (
    <div className={styles.bcg}>
      <Container>
        <div className={styles.wrapper}>
          <TimelineBox
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
          <TimelineBox
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"Summer 2022"}
            title={"Frontend"}
            description={
              "I became interested in the frontend part of programming. I decided to learn frontend technologies."
            }
            left={true}
          />
          <TimelineBox
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"Oktober 2022"}
            title={"Improving my stack"}
            description={"Learning Typescript and NodeJS."}
            projects={[
              {
                title: "Music player",
                link: "https://github.com/simz14/FoxPlayer",
              },
              {
                title: "Quiz app",
                link: "https://github.com/simz14/Quiz-application",
              },
            ]}
          />
          <TimelineBox
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"December 2022"}
            title={"ReactJS"}
            description={
              "After better understanding of Javascript and DOM I decided to learn ReactJS for building complex web applications."
            }
            projects={[
              {
                title: "Tea app",
                link: "https://github.com/simz14/react-tea-101",
              },
              {
                title: "ToDo app",
                link: "https://github.com/simz14/react-TodoApp",
              },
              {
                title: "Beer app",
                link: "https://github.com/simz14/react-brepi",
              },
            ]}
            left={true}
          />

          <TimelineBox
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"December-January 2023"}
            title={"Group project"}
            description={
              "In the programming bootcamp, we created a ticketportal application in a group of six people (SCRUM)."
            }
          />
          <TimelineBox
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"February 2023"}
            title={"Complex applications"}
            description={
              "After learning important concepts of React, I started to work on bigger and more complex applications."
            }
            left={true}
          />
          <TimelineBox
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
          <TimelineBox
            classnameWrapper={styles.boxWrapper}
            classnameBox={styles.box}
            classnameline={styles.line}
            classnameDot={styles.dot}
            date={"Present"}
            title={"Practicing and looking for a job opportunity"}
            description={"Buildinig projects in NextJs."}
            left={true}
          />
        </div>
      </Container>
    </div>
  );
};

export default TimelineSection;
