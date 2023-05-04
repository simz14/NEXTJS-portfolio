"use client";

import React from "react";
import Container from "./Container";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ButtonExtra from "./ButtonExtra";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: absolute;
  bottom: 90%;
  z-index: 9999;
  width: 100%;
  .contentWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .line {
      position: relative;
      cursor: pointer;
      transition: ease 0.2s;
    }
    .line:hover {
      color: #ff651c;
      transition: ease 0.2s;
    }

    .line:after {
      position: absolute;
      transition: all ease-in-out 0.2s;
      background: none repeat scroll 0 0 #ff651c;
      content: "";
      display: block;
      height: 2px;
      width: 0;
      right: 0;
      left: auto;
    }
    .line:hover:after {
      width: 100%;
      right: auto;
      left: 0;
    }

    .sections {
      gap: 5rem;
    }

    .home {
      span {
        font-size: 20px;
        font-weight: 900;
        color: #ff651c;
      }
    }

    .sections,
    .links,
    .home {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 3px;

      @media (max-width: 1000px) {
        .hide {
          display: none;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <nav className="contentWrapper">
          <div className="home">
            <div className="line">
              <span>SIMZ</span>
            </div>
          </div>
          <div className="sections">
            <div className="hide line">
              <span>SKILLS</span>
            </div>
            <div className="hide line">
              <span>PORTFOLIO</span>
            </div>
            <div className="hide line">
              <span>CONTACT</span>
            </div>
          </div>
          <div className="links ">
            <ButtonExtra>
              <a href="https://github.com/simz14">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/simona-zozu%C4%BEakov%C3%A1-003639249/">
                <BsLinkedin />
              </a>
            </ButtonExtra>
          </div>
        </nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
