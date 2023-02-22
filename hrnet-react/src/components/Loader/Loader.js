import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.load}>
      <div className={`${styles.load__bar} ${styles.load__bar1}`}></div>
      <div className={`${styles.load__bar} ${styles.load__bar2}`}></div>
      <div className={`${styles.load__bar} ${styles.load__bar3}`}></div>
      <div className={`${styles.load__bar} ${styles.load__bar4}`}></div>
      <div className={`${styles.load__bar} ${styles.load__bar5}`}></div>
    </div>
  );
}
