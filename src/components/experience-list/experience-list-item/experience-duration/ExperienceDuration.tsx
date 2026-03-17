import {type FC, useState, useEffect} from "react";
import Image from "next/image";

import {Tooltip as ReactTooltip} from "react-tooltip";

import {calcDateDiff} from "@/helpers/calcDateDiff";
import InfoIcon from "@/assets/icons/info.svg";
import type {Experience} from "@/types";

import styles from "./ExperienceDuration.module.scss";

interface ExperienceDurationProp {
    experience: Experience;
}

export const ExperienceDuration: FC<ExperienceDurationProp> = ({experience}) => {
    const [diff, setDiff] = useState<string>("");
    const {from, to} = experience.duration;
    const id = `duration-${experience.id}`;

    useEffect(() => {
        setDiff(calcDateDiff(from, to))
    }, [from, to]);

    return (
        <>
            <Image
                src={InfoIcon}
                className={styles.infoIcon}
                alt={`Experienced duration is ${diff}`}
                width={20}
                height={20}
                data-tooltip-id={id}
                data-tooltip-content={diff}
                data-tooltip-place="top"
                data-tooltip-variant="info"
            />
            <ReactTooltip id={id}/>
        </>
    );
};
