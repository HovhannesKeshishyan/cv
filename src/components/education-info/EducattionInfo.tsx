import React from "react";
import styles from "./EducattionInfo.module.scss";

export const EducattionInfo: React.FC = () => {
  return (
    <div className={styles.education}>
      <h2 className="app-section-title">Education</h2>
      <p className={styles.proff}>Programming</p>
      <p className={styles.college}>Abovyan State Energy College</p>
      <p className={styles.graduate_year}>2013</p>
    </div>
  );
};
