import { FC, ReactElement } from "react";
import styles from "./TwoColumns.module.scss";
import { SeparatorLine } from "@/utils/separator-line/SeparatorLine";

interface ITwoColumnsProps {
  children: [ReactElement, ReactElement];
  columnsBreakpoint?: number;
}

export const TwoColumns: FC<ITwoColumnsProps> = ({
  children,
  columnsBreakpoint = 1200
}) => {
  const [firstChild, secondChild] = children;
  const breakpointClassName = `breakpoint_${columnsBreakpoint}`;
  const classNames = `${styles.twoColumns} ${styles[breakpointClassName]}`;

  return (
    <div className={classNames}>
      {firstChild}
      <div className={styles.twoColumnsSeparatorLine}>
        <SeparatorLine />
      </div>
      {secondChild}
    </div>
  );
};
