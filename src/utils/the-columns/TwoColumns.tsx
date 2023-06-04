import React, { ReactElement } from "react";
import styles from "./TwoColumns.module.scss";
import { SeperatorLine } from "../seperator-line/SeperatorLine";

interface ITwoColumnsProps {
  children: [ReactElement, ReactElement];
  columns_breackpoint?: number;
}

export const TwoColumns: React.FC<ITwoColumnsProps> = ({
  children,
  columns_breackpoint = 1200
}) => {
  const [first_child, second_child] = children;
  const breackpoint_class_name = `breackpoint_${columns_breackpoint}`;
  const class_names = `${styles.two_columns} ${styles[breackpoint_class_name]}`;

  return (
    <div className={class_names}>
      {first_child}
      <div className={styles.two_columns_seperator_line}>        
        <SeperatorLine />
      </div>
      {second_child}
    </div>
  );
};
