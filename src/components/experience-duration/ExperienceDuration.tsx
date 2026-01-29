import {FC} from "react";
import Image from "next/image";

import {Tooltip as ReactTooltip} from "react-tooltip";

import {useDateDiff} from "@/hooks/useDateDiff";
import InfoIcon from "@/assets/icons/info.svg";
import type {Experience} from "@/types";

import styles from "./ExperienceDuration.module.scss";

interface ExperienceDurationProp {
    experience: Experience;
}

export const ExperienceDuration: FC<ExperienceDurationProp> = ({experience}) => {
    const diff = useDateDiff(experience.duration.from, experience.duration.to);
    return (
        <>
            <Image
                src={InfoIcon}
                className={styles.infoIcon}
                alt="Information icon"
                width={20}
                height={20}
                data-tooltip-id={`duration-${experience.id}`}
                data-tooltip-content={diff}
                data-tooltip-place="top"
                data-tooltip-variant="info"
            />
            <ReactTooltip id={`duration-${experience.id}`}/>
        </>
    );
};
