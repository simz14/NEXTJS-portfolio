import Container from "./Container";

const Tools = ({ children }) => {
  return (
    <div>
      <Container>
        <div className="children">{children}</div>
      </Container>

      <style jsx>{`
        div {
          background-color: #373737;
          display: flex;
          padding: 10px;
          .children {
            width: 100%;
            color: white;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default Tools;
