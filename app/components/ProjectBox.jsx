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
    img {
      height: 18rem;
      width: 30rem;
    }
  }
`;

const ProjectBox = ({ image, title, description, link, imageFirst }) => {
  return (
    <BoxWrapper>
      {imageFirst ? (
        <div className="box">
          <Image src={image} alt="project" />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonExtra>
              <h3>Detail</h3>
            </ButtonExtra>
          </div>
        </div>
      ) : (
        <div className="box">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonExtra>
              <h3>Detail</h3>
            </ButtonExtra>
          </div>
          <Image src={image} alt="project" />
        </div>
      )}
    </BoxWrapper>
  );
};

export default ProjectBox;
