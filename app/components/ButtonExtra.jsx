"use client";

const ButtonExtra = ({ children }) => {
  return (
    <>
      <button>{children}</button>
      <style>{`
        button {
          display: flex;
          border: none;
          padding: 8px 20px;
          gap: 1rem;
          background: #ff651c;
          border-color: #ff651c;
          box-shadow: 6px 6px 0 -1px #373737;
          color: #fff;
          cursor: pointer;
          transition: 0.3s ease;
          svg {
            cursor: pointer;
            width: 1.3rem;
            height: 1.3rem;
            color: #fff;
            transition: 0.3s ease;
          }
          svg:hover {
            color: #ff651c;
          }
        }
        button:hover {
          background: #373737;
          border-color: #373737;
          box-shadow: 6px 6px 0 -2px #ff651c;
        }
      `}</style>
    </>
  );
};

export default ButtonExtra;
