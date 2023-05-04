"use client";
import Container from "../Container";
import styled from "styled-components";
import ProjectBox from "../ProjectBox";
import happytails from "../../../public/happytails.png";
import doggyboard from "../../../public/doggyboard.png";
import greenBay from "../../../public/greenBay.png";
import ButtonExtra from "../ButtonExtra";

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
      gap: 4rem;
      align-items: center;
    }

    @media (max-width: 1000px) {
      .contentWrapper {
        gap: 3rem;
      }
    }
  }
`;

const ProjectsSection = () => {
  return (
    <ProjectsSectionWrapper>
      <Container>
        <div className="contentWrapper">
          <h1 className="title">LASTEST PROJECTS</h1>
          <div className="content">
            <ProjectBox
              image={doggyboard}
              imageFirst={true}
              title={"DoggyBoard"}
              description={
                "Application for managing dog shelter with all data and functionality needed, providing statistics and intuitive, ease-to-use interface."
              }
            />
            <ProjectBox
              image={happytails}
              imageFirst={false}
              title={"HappyTails"}
              description={
                "Dog shelter application that makes it easy to find and adopt your perfect companion. With a user-friendly interface you can quickly connect with shelter and start your journey towards adopting a loving furry friend."
              }
            />
            <ProjectBox
              image={greenBay}
              imageFirst={true}
              title={"GreenBay"}
              description={
                "Ecommerce application that provides a user-friendly platform for customers to browse and purchase products online, while offering sellers a convenient way to manage and sell their inventory."
              }
            />
            <ButtonExtra>
              <a href="https://github.com/simz14">
                <h3>See more</h3>
              </a>
            </ButtonExtra>
          </div>
        </div>
      </Container>
    </ProjectsSectionWrapper>
  );
};

export default ProjectsSection;
