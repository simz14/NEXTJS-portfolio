import React from "react";

import IntroSection from "./components/home/IntroSection";
import DescriptionSection from "./components/home/DescriptionSection";
import SkillsSection from "./components/home/SkillsSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";

const fetchDoggyBoard = async () => {
  const response = await fetch(
    "https://api.github.com/repos/simz14/DoggyBoard/languages",
    {
      header: {
        Authorization:
          "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",
      },
    }
  );
  return response.json();
};
const fetchHappyTails = async () => {
  const response = await fetch(
    "https://api.github.com/repos/simz14/HappyTails/languages",
    {
      header: {
        Authorization:
          "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",
      },
    }
  );
  return response.json();
};
const fetchGreenBay = async () => {
  const response = await fetch(
    "https://api.github.com/repos/simz14/greenBay/languages",
    {
      header: {
        Authorization:
          "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",
      },
    }
  );
  return response.json();
};

const Home = async () => {
  const doggyboardData = await fetchDoggyBoard();
  const happyTailsData = await fetchHappyTails();
  const greenBayData = await fetchGreenBay();
  console.log(doggyboardData, happyTailsData, greenBayData);
  return (
    <div>
      <IntroSection />
      <DescriptionSection />
      <SkillsSection />
      <ProjectsSection
        doggyboardData={doggyboardData}
        happyTailsData={happyTailsData}
        greenBayData={greenBayData}
      />
      <ContactSection />
    </div>
  );
};
export default Home;
