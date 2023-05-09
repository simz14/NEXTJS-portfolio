import IntroSection from "./sections/IntroSection/IntroSection";
import TimelineSection from "./sections/TimelineSection/TimelineSection";
export const metadata = {
  title: "My Journey",
};

const Timeline = () => {
  return (
    <div>
      <IntroSection />
      <TimelineSection />
    </div>
  );
};

export default Timeline;
