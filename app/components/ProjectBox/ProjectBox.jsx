import Image from "next/image";
import React from "react";
import ButtonExtra from "../ButtonExtra/ButtonExtra";
import styles from "./ProjectBox.module.scss";

const ProjectBox = ({
  image,
  title,
  description,
  github,
  demo,
  data,
  tech,
}) => {
  const getLines = (array) => {
    let sum = 0;
    array.map((item) => {
      sum += item[1];
    });
    return sum;
  };

  return (
    <div className={styles.boxWrapper}>
      <div className={`box ${styles.box}`}>
        <Image src={image} alt="project" />
        <div className={styles.text}>
          <div className={styles.badges}>
            {tech.map((item) => {
              return (
                <div key={item.name} className={styles.badge}>
                  {item.name}
                </div>
              );
            })}
          </div>
          <h2>{title}</h2>
          <span>{description}</span>
          <div className={styles.pulsingBox}>
            <div className={styles.pulsing}></div>
            <div>{getLines(Object.entries(data.languages))} lines of code</div>
          </div>
          <div className={styles.pulsingBox}>
            <div className={styles.pulsing}></div>
            <div>{data.commits} commits</div>
          </div>

          <div className={styles.buttonsWrapper}>
            <ButtonExtra>
              <a target="_blank" href={github}>
                <h3>GitHub</h3>
              </a>
            </ButtonExtra>
            <ButtonExtra>
              <a target="_blank" href={demo}>
                <h3>Demo</h3>
              </a>
            </ButtonExtra>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
