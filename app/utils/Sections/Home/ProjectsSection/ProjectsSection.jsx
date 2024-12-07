"use client";
import Container from "../../../../components/Container/Container";
import styles from "./ProjectSection.module.scss";
import ProjectBox from "../../../../components/ProjectBox/ProjectBox";
import happytails from "../../../../../public/happytails.png";
import doggyboard from "../../../../../public/doggyboard.png";
import greenBay from "../../../../../public/greenBay.png";
import monevis from "../../../../../public/monevis-app.png";
import monevisLanding from "../../../../../public/monevis-landing.png";
import ButtonExtra from "../../../../components/ButtonExtra/ButtonExtra";
import { motion } from "framer-motion";
import { SiMui, SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiStorybook } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const RealProjectsSection = () => {
  return(
    <div className={styles.contentWrapper}>
          <h1 className={styles.title}>REAL LIFE PROJECTS</h1>
          <div className={styles.content}>
          <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ProjectBox
                tech={[
                  { name: "React", icon: <SiReact /> },
                  { name: "Tailwind", icon: <SiTailwindcss /> },
                  { name: "Typescript", icon: <SiTypescript /> },
                  { name: "Storybook", icon: <SiStorybook /> },

                ]}
                image={monevis}
                imageFirst={false}
                title={"MONEVIS - Prop Trading Platform"}
                description={
                  "Monevis is a proprietary trading platform that allows traders to access substantial funding without risking their personal capital. The platform offers an intuitive interface where users can undertake structured evaluations, such as profit-based challenges, to demonstrate their trading skills. Successful participants transition to funded accounts."
                }
                demo={"https://app.monevis.com/auth/login"}
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
                  { name: "NextJS", icon: <TbBrandNextjs /> },
                  { name: "Tailwind", icon: <SiTailwindcss /> },
                  { name: "Typescript", icon: <SiTypescript /> },
                ]}
                image={monevisLanding}
                imageFirst={true}
                title={"MONEVIS - Prop Trading Presentation Website"}
                description={
                  "High-performance proprietary trading presentation website built using Next.js, TypeScript, and styled with Tailwind CSS. It emphasizes a fast, responsive, and scalable design to deliver a seamless user experience while showcasing the trading platform's unique features."
                }
                demo={"https://www.monevis.com"}
              />
            </motion.div>
          </div>
        </div>
  )
}

const ProjectsSection = ({ doggyboardData, happyTailsData, greenBayData }) => {
  return (
    <div className={styles.wrapper} id="portfolio">
      <Container>
        <RealProjectsSection/>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>OTHER PROJECTS</h1>
          <div className={styles.content}>

            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ProjectBox
                tech={[
                  { name: "React", icon: <SiReact /> },
                  { name: "Node.js", icon: <SiNodedotjs /> },
                  { name: "Mui", icon: <SiMui /> },
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
                tech={[
                  { name: "React", icon: <SiReact /> },
                  { name: "Mui", icon: <SiMui /> },
                ]}
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
                  { name: "React", icon: <SiReact /> },
                  { name: "Node.js", icon: <SiNodedotjs /> },
                  { name: "Mui", icon: <SiMui /> },
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
            <a target="blank" href="https://github.com/simz14">
              <ButtonExtra>
                <h2>See more</h2>
              </ButtonExtra>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
