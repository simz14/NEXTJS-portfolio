"use client";

import React from "react";
import Container from "./Container";
import githubIcon from "../../public/githubIcon.svg";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <nav className="headerWrapper">
        <div>
          <span>HOME</span>
        </div>
        <div className="hide">
          <span>SKILLS</span>
        </div>
        <div className="hide">
          <span>PORTFOLIO</span>
        </div>
        <div className="hide">
          <span>CONTACT</span>
        </div>
        <div>
          <Image src={githubIcon} alt="github" />
        </div>
      </nav>
      <style jsx>{`
        .headerWrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 15px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 5rem;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 3px;
          align-items: end;
          z-index: 999;

          & div {
            position: relative;
            cursor: pointer;
            transition: ease 0.2s;
          }
          & div:hover {
            color: #ff651c;
            transition: ease 0.2s;
          }

          & div:after {
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
          & div:hover:after {
            width: 100%;
            right: auto;
            left: 0;
          }

          @media (max-width: 1000px) {
            & .hide {
              display: none;
            }
          }
        }
      `}</style>
    </Container>
  );
};

export default Header;
