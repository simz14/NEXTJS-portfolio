"use client";

import React from "react";
import Container from "./Container";
import styled from "styled-components";
import { FaDiscord, FaFacebookF, FaInstagram } from "react-icons/fa";

const HeaderWrapper = styled.div`
  z-index: 9999;
  width: 100%;
  background-color: #373737;
  border-top: 1px solid #545353;
  .contentWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .links {
      display: flex;
      gap: 0.5rem;
    }
    a {
      text-decoration: none;
      color: white;
    }
    svg,
    p {
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <HeaderWrapper>
      <Container>
        <div className="contentWrapper">
          <div className="links">
            <a href="https://www.facebook.com/simona.zozulakova">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/simaz14/">
              <FaInstagram />
            </a>
            <a href=" https://bit.ly/3JhfA7y">
              <FaDiscord />
            </a>
          </div>
          <div>
            <p>Created by Simona</p>
          </div>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Footer;
