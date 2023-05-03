"use client";

import React from "react";

const ColoredBox = ({ children, color }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          align-items: center;
          border: 2px solid #373737;
          box-shadow: 0 0 0 0 #373737;
          display: flex;
          padding: 15px;
          transition: all 0.35s ease;
          background-color: ${color};
          gap: 1rem;
        }
        div:hover {
          box-shadow: 3px 3px 0 0 #373737;
        }
      `}</style>
    </>
  );
};

export default ColoredBox;
