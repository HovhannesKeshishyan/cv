import {FC} from "react";
import {IExperience} from "@/store/reduceers/author/types.ts";
import {useDateDiff} from "@/hooks/useDateDiff.ts";
import {Tooltip as ReactTooltip} from "react-tooltip";
import InfoIcon from "@/assets/icons/info.svg";
import styles from "./ExperienceDuration.module.scss";


interface IExperienceDurationProp {
    experience: IExperience;
}

export const ExperienceDuration: FC<IExperienceDurationProp> = ({experience}) => {
    const diff = useDateDiff(experience.year.from, experience.year.to);
    return (
        <>
            <img
                src={InfoIcon}
                className={styles.infoIcon}
                alt="Information icon"
                data-tooltip-id={`duration-${experience.id}`}
                data-tooltip-content={diff}
                data-tooltip-place="top"
                data-tooltip-variant="info"
            />
            <ReactTooltip id={`duration-${experience.id}`}/>
        </>
    );
};
