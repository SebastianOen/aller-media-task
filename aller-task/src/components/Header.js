import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>Dagbladet</div>
    </div>
  );
}

export default Header;
