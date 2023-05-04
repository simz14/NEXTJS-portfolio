"use client";
import Image from "next/image";
import React from "react";
import ButtonExtra from "./ButtonExtra";
import styled from "styled-components";

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .box {
    display: flex;
    justify-content: space-around;
    gap: 5rem;
    .buttonsWrapper {
      display: flex;
      gap: 1rem;
      a {
        text-decoration: none;
        color: white;
      }
    }
    .firstImage {
      display: none;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      gap: 1rem;
    }
    img {
      height: 18rem;
      width: 30rem;
      border: 3px solid #ff651c;
      box-shadow: 6px 6px 0 -1px #373737;
    }
  }

  @media (max-width: 1000px) {
    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 5rem;
      .firstImage {
        display: block;
      }
      .lastImage {
        display: none;
      }
      img {
        height: auto;
        width: 100%;
      }
    }
  }
`;

const ProjectBox = ({
  image,
  title,
  description,
  github,
  demo,
  imageFirst,
}) => {
  return (
    <BoxWrapper>
      {imageFirst ? (
        <div className="box">
          <Image src={image} alt="project" />
          <div className="text">
            <h2>{title}</h2>
            <span>{description}</span>
            <div className="buttonsWrapper">
              <ButtonExtra>
                <a target="_blank" href={github}>
                  <h3>GitHub</h3>
                </a>
              </ButtonExtra>
              <ButtonExtra>
                <a target="_blank" href={demo}>
                  <h3>Demo</h3>
                </a>
              </ButtonExtra>
            </div>
          </div>
        </div>
      ) : (
        <div className="box">
          <Image className="firstImage" src={image} alt="project" />
          <div className="text">
            <h2>{title}</h2>
            <span>{description}</span>
            <div className="buttonsWrapper">
              <ButtonExtra>
                <a target="_blank" href={github}>
                  <h3>GitHub</h3>
                </a>
              </ButtonExtra>
              <ButtonExtra>
                <a target="_blank" href={demo}>
                  <h3>Demo</h3>
                </a>
              </ButtonExtra>
            </div>
          </div>
          <Image className="lastImage" src={image} alt="project" />
        </div>
      )}
    </BoxWrapper>
  );
};

export default ProjectBox;
