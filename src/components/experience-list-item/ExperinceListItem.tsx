import type {FC} from "react";

import {ExperienceDuration} from "../experience-duration/ExperienceDuration";
import {getExperiencePeriod} from "@/services/helpers";
import {
    ExperienceListItemAdditionalInfo
} from "@/components/experience-list-item-additional-info/ExperinceListItemAdditionalInfo";

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
            <ExperienceListItemAdditionalInfo experience={experience}/>
        </div>
    )
};
