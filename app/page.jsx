import React from "react";

import IntroSection from "./components/home/IntroSection";
import DescriptionSection from "./components/home/DescriptionSection";
import SkillsSection from "./components/home/SkillsSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";

const Home = () => {
  return (
    <div>
      <IntroSection />
      <DescriptionSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
export default Home;
