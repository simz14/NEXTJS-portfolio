"use client";
import Container from "../Container";
import styled from "styled-components";

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
          <div className="content"></div>
        </div>
      </Container>
    </ProjectsSectionWrapper>
  );
};

export default ProjectsSection;
