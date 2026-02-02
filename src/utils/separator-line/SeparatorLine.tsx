import type {FC} from "react";
import styles from "./SeparatorLine.module.scss";

interface Props {
    className?: string;
}

export const SeparatorLine: FC<Props> = ({className}) => {
    return (
        <div className={`${styles.separatorLineWrapper} ${className || ""}`} aria-hidden="true">
            <div className={styles.separatorLine}></div>
        </div>
    );
};
