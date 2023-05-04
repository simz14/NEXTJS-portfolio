"use clinet";
import Container from "./Container";
import styled from "styled-components";

const ToolsWrapper = styled.div`
  background-color: #373737;
  display: flex;
  padding: 10px;
  .children {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    color: white;
    gap: 1rem;
    justify-content: space-around;
  }
`;

const Tools = ({ children }) => {
  return (
    <ToolsWrapper>
      <Container>
        <div className="children">{children}</div>
      </Container>
    </ToolsWrapper>
  );
};

export default Tools;
