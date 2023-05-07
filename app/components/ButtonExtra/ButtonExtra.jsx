import styles from "./ButtonExtra.module.scss";

const ButtonExtra = ({ children, onClick }) => {
  return (
    <div className={styles.styledButton} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonExtra;
