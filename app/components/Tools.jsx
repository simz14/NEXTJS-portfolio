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
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            color: white;
            gap: 1rem;
            justify-content: space-around;
          }
        }
      `}</style>
    </div>
  );
};

export default Tools;
