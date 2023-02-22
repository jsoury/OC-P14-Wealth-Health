import { useState } from "react";

import styles from "./alert.module.scss";

export default function Alert({ children, type, message, isShow, setIsShow }) {
  //const [isShow, setIsShow] = useState(true);

  const handleClose = (event) => {
    event.preventDefault();
    setIsShow(false);
  };

  return (
    <div
      className={`${styles.alert} ${styles[type]} ${!isShow && styles.hide}`}
    >
      <span className={styles.closebtn} onClick={handleClose}>
        {`\u00D7`}
      </span>
      {children ? children : message}
    </div>
  );
}
