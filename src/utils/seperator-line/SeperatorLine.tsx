import React from "react";
import styles from "./SeperatorLine.module.scss";

export const SeperatorLine: React.FC = () => {
  return (
    <div className={styles.seperator_line_wrapper}>
      <div className={styles.seperator_line}></div>
    </div>
  );
};
