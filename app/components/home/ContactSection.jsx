"use client";
import ColoredBox from "../ColoredBox";
import Container from "../Container";
import styled from "styled-components";
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../ContactForm";

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
    .contacts {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .contact {
        display: flex;
        align-items: start;
        gap: 1rem;
        h4 {
          color: white;
        }
      }
    }

    .title {
      color: #ff651c;
    }

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }
  @media (max-width: 1000px) {
    .contentWrapper {
      .content {
        grid-template-columns: 1fr;
      }
      .contacts {
        display: flex;
        gap: 1rem;
      }
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
            <ContactForm />
            <div className="contacts">
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
        </div>
      </Container>
    </SkillsSectionWrapper>
  );
};

export default ContactSection;
