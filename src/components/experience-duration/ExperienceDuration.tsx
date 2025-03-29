import {FC} from "react";
import Image from "next/image";

import {useDateDiff} from "@/hooks/useDateDiff";
import {Tooltip as ReactTooltip} from "react-tooltip";
import InfoIcon from "@/assets/icons/info.svg";

import styles from "./ExperienceDuration.module.scss";

import type {IExperience} from "@/types";


interface IExperienceDurationProp {
    experience: IExperience;
}

export const ExperienceDuration: FC<IExperienceDurationProp> = ({experience}) => {
    const diff = useDateDiff(experience.year.from, experience.year.to);
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
