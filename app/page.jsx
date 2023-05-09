import React from "react";

import IntroSection from "./utils/Sections/Home/IntroSection/IntroSection";
import DescriptionSection from "./utils/Sections/Home/DescriptionSection/DescriptionSection";
import SkillsSection from "./utils/Sections/Home/SkillsSection/SkillsSection";
import ProjectsSection from "./utils/Sections/Home/ProjectsSection/ProjectsSection";
import ContactSection from "./utils/Sections/Home/ContactSection/ContactSection";
import dotenv from "dotenv";

dotenv.config();

const fetchDoggyBoard = async () => {
  const responseLanguages = await fetch(
    "https://api.github.com/repos/simz14/DoggyBoard/languages",
    {
      header: {
        Authorization: process.env.TOKEN,
      },
    }
  );
  const responseCommits = await fetch(
    "https://api.github.com/repos/simz14/DoggyBoard/commits?page=1&per_page=200",
    {
      header: {
        Authorization: process.env.TOKEN,
      },
    }
  );
  const commits = await responseCommits.json();
  return {
    languages: await responseLanguages.json(),
    commits: commits.length,
  };
};

const fetchHappyTails = async () => {
  const responseLanguages = await fetch(
    "https://api.github.com/repos/simz14/HappyTails/languages",
    {
      header: {
        Authorization: process.env.TOKEN,
      },
    }
  );
  const responseCommits = await fetch(
    "https://api.github.com/repos/simz14/HappyTails/commits?page=1&per_page=200",
    {
      header: {
        Authorization: process.env.TOKEN,
      },
    }
  );

  const commits = await responseCommits.json();
  return {
    languages: await responseLanguages.json(),
    commits: commits.length,
  };
};
const fetchGreenBay = async () => {
  const responseLanguages = await fetch(
    "https://api.github.com/repos/simz14/greenBay/languages",
    {
      header: {
        Authorization: process.env.TOKEN,
      },
    }
  );
  const responseCommits = await fetch(
    "https://api.github.com/repos/simz14/greenBay/commits?page=1&per_page=200",
    {
      header: {
        Authorization: process.env.TOKEN,
      },
    }
  );
  const commits = await responseCommits.json();
  return {
    languages: await responseLanguages.json(),
    commits: commits.length,
  };
};

const Home = async () => {
  const doggyboardData = await fetchDoggyBoard();
  const happyTailsData = await fetchHappyTails();
  const greenBayData = await fetchGreenBay();

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
