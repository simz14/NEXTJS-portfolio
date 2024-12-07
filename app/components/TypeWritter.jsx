"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterComponent = () => {
  return (
    <Typewriter
      words={["Frontend Developer","Lifelong Learner", "Problem Solver","Team Player","Adapting to Change"
]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  );
};

export default TypeWriterComponent;
