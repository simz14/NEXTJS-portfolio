"use client";
import ColoredBox from "../ColoredBox";
import Container from "../Container";
import styled from "styled-components";
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

const SkillsSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./bg-effect-splash.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #373737;
  .contentWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    position: relative;
    z-index: 999;
    gap: 3rem;
    .contact {
      display: flex;
      align-items: center;
      gap: 1rem;
      h4 {
        color: white;
      }
    }

    .title {
      color: #ff651c;
    }

    .content {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 700px) {
    .content {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const ContactSection = () => {
  return (
    <SkillsSectionWrapper>
      <Container>
        <div className="contentWrapper">
          <h1 className="title">CONTACT ME</h1>
          <div className="content">
            <div className="contact">
              <ColoredBox color={"#fec447"}>
                <FaPhoneAlt />
              </ColoredBox>
              <h4>+421 917 898 084</h4>
            </div>
            <div className="contact">
              <ColoredBox color={"#feccb5"}>
                <FaEnvelope />
              </ColoredBox>
              <h4>szozulakova@gmail.com</h4>
            </div>
            <div className="contact">
              <ColoredBox color={"#7eb6d8"}>
                <FaLinkedinIn />
              </ColoredBox>
              <h4>Simona Zozuľaková</h4>
            </div>
          </div>
        </div>
      </Container>
    </SkillsSectionWrapper>
  );
};

export default ContactSection;
