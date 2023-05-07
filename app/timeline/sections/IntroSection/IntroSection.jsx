import Container from "@/app/components/Container/Container";
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>MY JOURNEY</h1>
        <p>
          Here is my journey as a programmer from the beginning until this day.
        </p>
      </Container>
    </div>
  );
};

export default IntroSection;
