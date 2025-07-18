import styles from "./style.module.scss";

export const Main: React.FC = () => {
  return (
    <>
      <div className={styles.frame}>
        <div className={styles.canvas}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
      </div>
    </>
  );
};
