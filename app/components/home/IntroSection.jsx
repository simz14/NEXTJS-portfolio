"use client";
import Container from "../Container";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import simonagreen from "../../../public/simonagreen.jpg";
import Image from "next/image";

const IntroWrapper = styled.div`
  background-color: #fff9ec;

  .contentWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 100px;
    padding-bottom: 50px;
    position: relative;
    z-index: 999;
    .introtext {
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 999;
      gap: 1rem;

      span {
        border-bottom: 1px solid #ff651c;
      }
    }
  }
  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: relative;
      object-fit: cover;
      height: 25rem;
      width: 25rem;
      z-index: 9999;
      border-radius: 50%;
    }
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
    .contentWrapper {
      grid-template-columns: 1fr;
      gap: 3rem;
      .introtext {
        align-items: center;
        text-align: center;
      }
    }
  }
  @media (max-width: 750px) {
    .images::after {
      bottom: 70%;
      left: 10%;
      right: -75%;
      top: 0;
    }
  }
  @media (max-width: 500px) {
    .images {
      img {
        height: 20rem;
        width: 20rem;
      }
    }
  }
`;

const IntroSection = () => {
  return (
    <IntroWrapper id="intro">
      <Container>
        <div className="contentWrapper">
          <div className="introtext">
            <h4>HI, MY NAME IS SIMONA</h4>
            <h1>
              I love
              <Typewriter
                words={[" Programming", " Learning"]}
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
          <div className="images">
            <Image src={simonagreen} alt="simona" />
          </div>
        </div>
      </Container>
    </IntroWrapper>
  );
};

export default IntroSection;
