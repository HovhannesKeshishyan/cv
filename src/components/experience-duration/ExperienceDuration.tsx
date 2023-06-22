import React from "react";
import { IExperiences } from "../../store/reduceers/author/types";
import { useDateDiff } from "../../hooks/useDateDiff";
import { Tooltip as ReactTooltip } from "react-tooltip";
import InfoIcon from "@/assets/icons/info.svg";
import styles from "./ExperienceDuration.module.scss";


interface IExperienceDurationProp {
  experience: IExperiences;
}

export const ExperienceDuration: React.FC<IExperienceDurationProp> = ({
  experience,
}) => {
  const diff = useDateDiff(experience.year.from, experience.year.to);
  return (
    <>
      <img
        src={InfoIcon}
        className={styles.info_icon}
        alt="Information icon"
        data-tooltip-id={`duration-${experience.id}`}
        data-tooltip-content={diff}
        data-tooltip-place="top"
        data-tooltip-variant="info"
      />
      <ReactTooltip id={`duration-${experience.id}`} />
    </>
  );
};
