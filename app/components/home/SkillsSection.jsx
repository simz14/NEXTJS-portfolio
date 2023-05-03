"use client";
import ColoredBox from "../ColoredBox";
import Container from "../Container";
import styled from "styled-components";
import cvphoto from "../../../public/ofiSimona.jpg";
import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  SiExpress,
  SiJavascript,
  SiJest,
  SiMysql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Tools from "../Tools";

const SkillsSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./bg-effect.png");
  background-repeat: no-repeat;
  background-size: cover;

  .contentWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    position: relative;
    z-index: 999;
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .imageWrapper {
        display: flex;
        justify-content: end;
        .cvphoto {
          position: relative;
          object-fit: cover;
          height: 30rem;
          width: 25rem;
          z-index: 9999;
          border-radius: 4rem;
        }
      }

      .boxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }

    @media (max-width: 1000px) {
      .content {
        grid-template-columns: 1fr;
        gap: 1rem;
        .imageWrapper {
          display: flex;
          justify-content: center;
          .cvphoto {
            height: 30rem;
            width: 30rem;
            border-radius: 3rem;
          }
        }
      }
      .contentWrapper {
        gap: 3rem;
      }
    }
    @media (max-width: 500px) {
      .content {
        .imageWrapper {
          .cvphoto {
            height: 20rem;
            width: 20rem;
          }
        }
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
          <div className="content">
            <div className="boxes">
              <ColoredBox color="#9bd3d0">
                <AiFillHtml5 />
                <h4>HTML</h4>
              </ColoredBox>
              <ColoredBox color="#ffc107">
                <IoLogoCss3 />
                <h4>CSS</h4>
              </ColoredBox>
              <ColoredBox color="#feccb5">
                <SiJavascript />
                <h4>JAVASCRIPT</h4>
              </ColoredBox>
              <ColoredBox color="#92b5ff">
                <SiTypescript />
                <h4>TYPESCRIPT</h4>
              </ColoredBox>
              <ColoredBox color="#c4d39b">
                <SiReact />
                <h4>REACT</h4>
              </ColoredBox>
              <ColoredBox color="#d2ceff">
                <TbBrandNextjs />
                <h4>NEXTJS</h4>
              </ColoredBox>
              <ColoredBox color="#9bd3d0">
                <IoLogoNodejs />
                <h4>NODEJS</h4>
              </ColoredBox>
              <ColoredBox color="#ffc107">
                <SiExpress />
                <h4>EXPRESS</h4>
              </ColoredBox>
              <ColoredBox color="#feccb5">
                <SiMysql />
                <h4>SQL</h4>
              </ColoredBox>
              <ColoredBox color="#92b5ff">
                <SiJest />
                <h4>JEST</h4>
              </ColoredBox>
            </div>
            <div className="imageWrapper">
              <Image className="cvphoto" src={cvphoto} alt="simona" />
            </div>
          </div>
        </div>
      </Container>
      <Tools>
        <h3>STYLED COMPONENTS</h3>
        <h3>MUI</h3>
        <h3>REACT HOOK FORM</h3>
        <h3>SEQUELIZE</h3>
      </Tools>
    </SkillsSectionWrapper>
  );
};

export default SkillsSection;
