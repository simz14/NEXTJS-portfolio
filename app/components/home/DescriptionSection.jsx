"use client";
import Container from "../Container";
import styled from "styled-components";
import ButtonExtra from "../ButtonExtra";

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .contentWrapper {
    display: flex;
    padding: 50px 0;
    position: relative;
    z-index: 999;
    max-width: 640px;
    align-self: center;

    .description {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
    .calculations {
      display: flex;
      justify-content: space-evenly;
      .calculation {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .imageWrapper {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1000px) {
    .contentWrapper {
      gap: 3rem;
      .introtext {
        align-items: center;
        text-align: center;
      }
    }
  }
`;

const DescriptionSection = () => {
  return (
    <DescriptionWrapper>
      <Container>
        <div className="contentWrapper">
          <div className="description">
            <h2>I am a FullStack developer with about 1 year of experience.</h2>
            <p>
              I'm a 20-year-old FullStack programmer. I started programming more
              than a year ago. Since then, I have been expanding my knowledge
              and continue to do so. I currently live in Trnava, but I come from
              Svidník, a city in eastern Slovakia.
            </p>
            <div className="calculations">
              <div className="calculation">
                <h3>10</h3>
                <p>Projects completed</p>
                <ButtonExtra>
                  <h3>Contact</h3>
                </ButtonExtra>
              </div>
              <div className="calculation">
                <h3>1000+</h3>
                <p>lines of code writte</p>
                <ButtonExtra>
                  <h3>Portfolio</h3>
                </ButtonExtra>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </DescriptionWrapper>
  );
};

export default DescriptionSection;
