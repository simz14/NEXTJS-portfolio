import styles from "./IntroSection.module.scss";
import Container from "../../Container/Container";
import simonagreen from "../../../../public/simonagreen.jpg";
import Image from "next/image";
import TypeWriterComponent from "../../TypeWritter";

const IntroSection = () => {
  return (
    <div className="wrapper">
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.introtext}>
            <h4>HI, MY NAME IS SIMONA</h4>
            <h1>
              I love
              <TypeWriterComponent />
            </h1>
            <p>Based in Trnava, Slovakia</p>
          </div>
          <div className={styles.images}>
            <Image src={simonagreen} alt="simona" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntroSection;
