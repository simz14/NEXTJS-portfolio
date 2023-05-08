"use client";
import Container from "../../../../components/Container/Container";
import styles from "./ProjectSection.module.scss";
import ProjectBox from "../../../../components/ProjectBox/ProjectBox";
import happytails from "../../../../../public/happytails.png";
import doggyboard from "../../../../../public/doggyboard.png";
import greenBay from "../../../../../public/greenBay.png";
import ButtonExtra from "../../../../components/ButtonExtra/ButtonExtra";
import { motion } from "framer-motion";
//import { SiMui, SiReact, SiNodedotjs } from "react-icons/si";

const ProjectsSection = ({ doggyboardData, happyTailsData, greenBayData }) => {
  return (
    <div className={styles.wrapper} id="portfolio">
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>LASTEST PROJECTS</h1>
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ProjectBox
                tech={[
                  { name: "ReactJS" },
                  { name: "NodeJS" },
                  { name: "Mui" },
                ]}
                data={doggyboardData}
                image={doggyboard}
                imageFirst={true}
                title={"DoggyBoard"}
                description={
                  "Application for managing dog shelter with all data and functionality needed, providing statistics and intuitive, ease-to-use interface."
                }
                github={"https://github.com/simz14/DoggyBoard"}
                demo={"https://doggy-board.vercel.app"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ProjectBox
                tech={[{ name: "ReactJS" }, { name: "Mui" }]}
                data={happyTailsData}
                image={happytails}
                imageFirst={false}
                title={"HappyTails"}
                description={
                  "Dog shelter application that makes it easy to find and adopt your perfect companion. With a user-friendly interface you can quickly connect with shelter and start your journey towards adopting a loving furry friend."
                }
                github={"https://github.com/simz14/HappyTails"}
                demo={"https://happy-tails-eosin.vercel.app/"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ProjectBox
                tech={[
                  { name: "ReactJS" },
                  { name: "NodeJS" },
                  { name: "Mui" },
                ]}
                data={greenBayData}
                image={greenBay}
                imageFirst={true}
                title={"GreenBay"}
                description={
                  "Ecommerce application that provides a user-friendly platform for customers to browse and purchase products online, while offering sellers a convenient way to manage and sell their inventory."
                }
                github={"https://github.com/simz14/greenBay"}
                demo={"https://green-bay-v1.vercel.app/"}
              />
            </motion.div>
            <ButtonExtra>
              <a target="blank" href="https://github.com/simz14">
                <h2>See more</h2>
              </a>
            </ButtonExtra>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
