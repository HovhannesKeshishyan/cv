import {FC} from "react";
import styles from "./SeparatorLine.module.scss";

export const SeparatorLine: FC = () => {
  return (
    <div className={styles.separatorLineWrapper}>
      <div className={styles.separatorLine}></div>
    </div>
  );
};
