import {type FC, ReactElement} from "react";
import {SeparatorLine} from "@/utils/separator-line/SeparatorLine";

import styles from "./TwoColumns.module.scss";

interface TwoColumnsProps {
    children: [ReactElement, ReactElement];
    columnsBreakpoint?: number;
}

export const TwoColumns: FC<TwoColumnsProps> = (props) => {
    const {children, columnsBreakpoint = 1200} = props;

    const [firstChild, secondChild] = children;
    const breakpointClassName = `breakpoint_${columnsBreakpoint}`;
    const classNames = `${styles.twoColumns} ${styles[breakpointClassName]}`;

    return (
        <div className={classNames}>
            {firstChild}
            <div className={styles.twoColumnsSeparatorLine}>
                <SeparatorLine/>
            </div>
            {secondChild}
        </div>
    );
};
