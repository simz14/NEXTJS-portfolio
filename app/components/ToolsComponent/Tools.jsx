import Container from "../Container/Container";
import styles from "./Tools.module.scss";

const Tools = ({ children }) => {
  return (
    <div className={styles.tools}>
      <Container>
        <div className={styles.children}>{children}</div>
      </Container>
    </div>
  );
};

export default Tools;
