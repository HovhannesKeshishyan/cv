import type {FC} from "react";
import styles from "./EducationInfo.module.scss";

export const EducationInfo: FC = () => {
    return (
        <div className={styles.education}>
            <h2 className="app-section-title">Education</h2>
            <h3 className={styles.degree}>Associate&apos;s Degree</h3>
            <h3 className={styles.prof}>
                <i>Software for Automated Computing Systems</i>
            </h3>
            <h3 className={styles.college}>Abovyan State Energy College</h3>
            <h3 className={styles.graduateYear}>2009 - 2013</h3>
        </div>
    );
};
