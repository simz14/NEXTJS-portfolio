"use client";
import Container from "../Container";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const IntroWrapper = styled.div`
  background-color: #fff9ec;

  .contentWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 59px;
    position: relative;
    min-height: 40rem;
  }

  .images::after {
    background: rgba(254, 196, 72, 0.4);
    border-radius: 50px;
    bottom: 47%;
    content: "";
    left: 48%;
    position: absolute;
    right: -16%;
    top: -19%;

    transform: rotate(-45deg);
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 750px) {
    .images::after {
      bottom: 70%;
      left: 10%;
      right: -75%;
      top: 0;
    }
  }
`;

const IntroSection = () => {
  return (
    <IntroWrapper>
      <Container>
        <div className="contentWrapper">
          <div>
            <h4>HI, MY NAME IS SIMONA</h4>
            <h1>
              I'm a
              <Typewriter
                words={[" Programmer", " Programming enthusiast"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <p>Based in Trnava, Slovakia</p>
          </div>
          <div className="images"></div>
        </div>
      </Container>
    </IntroWrapper>
  );
};

export default IntroSection;
