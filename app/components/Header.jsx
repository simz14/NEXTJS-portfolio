"use client";

import React from "react";
import Container from "./Container";
import githubIcon from "../../public/githubIcon.svg";
import linkedinIcon from "../../public/linkedin.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="headerWrapper">
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
          <div className="links">
            <div className="line">
              <Image src={githubIcon} alt="github" />
            </div>
            <div className="line">
              <Image src={linkedinIcon} alt="linkedin" />
            </div>
          </div>
        </nav>
      </Container>
      <style jsx>{`
        .headerWrapper {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 999;
          width: 100%;
          .contentWrapper {
            width: 100%;
            display: flex;
            justify-content: space-between;

            & .line {
              position: relative;
              cursor: pointer;
              transition: ease 0.2s;
            }
            & .line:hover {
              color: #ff651c;
              transition: ease 0.2s;
            }

            & .line:after {
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
            & .line:hover:after {
              width: 100%;
              right: auto;
              left: 0;
            }

            & .sections {
              gap: 5rem;
            }
            & .links {
              gap: 1rem;
            }

            & .sections,
            .links,
            .home {
              display: flex;
              flex-direction: row;
              align-items: center;
              font-weight: 600;
              font-size: 14px;
              letter-spacing: 3px;

              @media (max-width: 1000px) {
                & .hide {
                  display: none;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
