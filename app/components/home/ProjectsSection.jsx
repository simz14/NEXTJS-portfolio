"use client";
import Container from "../Container";
import styled from "styled-components";
import ProjectBox from "../ProjectBox";
import happytails from "../../../public/happytails.png";
import doggyboard from "../../../public/doggyboard.png";

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
    .title {
      color: #ff651c;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 4rem;
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
              image={happytails}
              imageFirst={true}
              title={"HappyTails"}
              description={"xfcgvjhbknjml"}
            />
            <ProjectBox
              image={doggyboard}
              imageFirst={false}
              title={"DoggyBoard"}
              description={"xfcgvjhbknjml"}
            />
          </div>
        </div>
      </Container>
    </ProjectsSectionWrapper>
  );
};

export default ProjectsSection;
