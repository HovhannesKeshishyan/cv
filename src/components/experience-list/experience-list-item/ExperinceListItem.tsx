import type {FC} from "react";
import {ExperienceDuration} from "./experience-duration/ExperienceDuration";
import {ExperienceAdditionalInfo} from "./experience-additional-info/ExperienceAdditionalInfo";
import {getExperiencePeriod} from "@/helpers/getExperiencePeriod";

import styles from "./ExperienceListItem.module.scss";

import type {Experience} from "@/types";

interface Props {
    experience: Experience
}

export const ExperienceListItem: FC<Props> = ({experience}) => {
    return (
        <div className={styles.experience}>
            <div className={styles.role}>{experience.role}</div>
            <div className={styles.companyName}>{experience.company}</div>
            <div className={styles.year}>
          <span>
            {getExperiencePeriod(experience.duration.from, experience.duration.to)}
          </span>
                <ExperienceDuration experience={experience}/>
            </div>
            <ExperienceAdditionalInfo experience={experience}/>
        </div>
    )
};
