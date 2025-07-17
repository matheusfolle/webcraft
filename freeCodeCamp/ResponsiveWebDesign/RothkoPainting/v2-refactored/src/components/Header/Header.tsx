import styles from "./style.module.scss";

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Rothko Painting</h1>
      </header>
    </>
  );
};
