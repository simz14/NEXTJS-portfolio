"use client";

"use client";
import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  align-items: center;
  border: 2px solid #373737;
  box-shadow: 0 0 0 0 #373737;
  display: flex;
  padding: 15px;
  transition: all 0.35s ease;
  background-color: ${(props) => props.color};
  gap: 1rem;

  div:hover {
    box-shadow: 3px 3px 0 0 #373737;
  }
`;

const ColoredBox = ({ children, color }) => {
  return <StyledBox color={color}>{children}</StyledBox>;
};

export default ColoredBox;
