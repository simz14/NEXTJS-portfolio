"use client";
import Container from "../Container";
import styled from "styled-components";

const SkillsSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./bg-effect.png");
  background-repeat: no-repeat;
  background-size: cover;

  .contentWrapper {
    display: flex;
    padding: 50px 0;
    position: relative;
    z-index: 999;
    max-width: 640px;

    @media (max-width: 1000px) {
      .contentWrapper {
        gap: 3rem;
      }
    }
  }
`;

const SkillsSection = () => {
  return (
    <SkillsSectionWrapper>
      <Container>
        <div className="contentWrapper">
          <h1>MY SKILLS</h1>
        </div>
      </Container>
    </SkillsSectionWrapper>
  );
};

export default SkillsSection;
