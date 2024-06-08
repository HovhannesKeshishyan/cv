import React from "react";
import styles from "./ExperienceListItem.module.scss";
import {ExperienceDuration} from "../experience-duration/ExperienceDuration";
import {getExperiencePeriod} from "@/services/helpers.ts";
import {IExperience} from "@/store/reduceers/author/types.ts";
import {
    ExperienceListItemAdditionalInfo
} from "@/components/experience-list-item-additional-info/ExperinceListItemAdditionalInfo.tsx";

interface IProps {
    experience: IExperience
}

export const ExperienceListItem: React.FC<IProps> = ({experience}) => {
    return (
        <div className={styles.experience}>
            <div className={styles.role}>{experience.role}</div>
            <div className={styles.company_name}>{experience.company}</div>
            <div className={styles.year}>
          <span>
            {getExperiencePeriod(experience.year.from, experience.year.to)}
          </span>
                <ExperienceDuration experience={experience}/>
            </div>
            <ExperienceListItemAdditionalInfo experience={experience}/>
        </div>
    )
};
