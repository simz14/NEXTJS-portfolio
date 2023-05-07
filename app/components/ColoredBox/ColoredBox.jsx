import styles from "./ColoredBox.module.scss";

const ColoredBox = ({ children, color }) => {
  return (
    <div
      style={{ backgroundColor: color ? color : "white" }}
      className={styles.box}
    >
      {children}
    </div>
  );
};

export default ColoredBox;
