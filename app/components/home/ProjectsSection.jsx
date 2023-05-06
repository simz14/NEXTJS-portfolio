"use client";
import Container from "../Container";
import styled from "styled-components";
import ProjectBox from "../ProjectBox";
import happytails from "../../../public/happytails.png";
import doggyboard from "../../../public/doggyboard.png";
import greenBay from "../../../public/greenBay.png";
import ButtonExtra from "../ButtonExtra";
//import { SiMui, SiReact, SiNodedotjs } from "react-icons/si";

const ProjectsSectionWrapper = styled.div`
  width: 100%;
  height: 100%;

  .contentWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    position: relative;
    z-index: 999;
    gap: 4rem;
    .title {
      color: #ff651c;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 8rem;
      align-items: center;

      div:nth-child(even) {
        .box {
          flex-direction: row-reverse;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .contentWrapper {
      .content {
        div:nth-child(even) {
          .box {
            flex-direction: column;
          }
        }
      }
    }
  }
`;

const ProjectsSection = ({ doggyboardData, happyTailsData, greenBayData }) => {
  return (
    <ProjectsSectionWrapper id="portfolio">
      <Container>
        <div className="contentWrapper">
          <h1 className="title">LASTEST PROJECTS</h1>
          <div className="content">
            <ProjectBox
              tech={[{ name: "ReactJS" }, { name: "NodeJS" }, { name: "Mui" }]}
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
            <ProjectBox
              tech={[{ name: "ReactJS" }, { name: "NodeJS" }, { name: "Mui" }]}
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
            <ButtonExtra>
              <a href="https://github.com/simz14">
                <h2>See more</h2>
              </a>
            </ButtonExtra>
          </div>
        </div>
      </Container>
    </ProjectsSectionWrapper>
  );
};

export default ProjectsSection;
