import {FC} from "react";
import styles from "./EducationInfo.module.scss";

export const EducationInfo: FC = () => {
  return (
    <div className={styles.education}>
      <h2 className="app-section-title">Education</h2>
      <p className={styles.prof}>Programming</p>
      <p className={styles.college}>Abovyan State Energy College</p>
      <p className={styles.graduateYear}>2013</p>
    </div>
  );
};
