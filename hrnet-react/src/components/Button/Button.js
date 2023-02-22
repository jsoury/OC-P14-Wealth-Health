import styles from "./button.module.scss";
import Link from "next/link";

export default function Button({ children, type, link }) {
  return (
    <Link href={link ? link : "#"}>
      <div className={`${styles.btn} ${styles[type]}`}>{children}</div>
    </Link>
  );
}
