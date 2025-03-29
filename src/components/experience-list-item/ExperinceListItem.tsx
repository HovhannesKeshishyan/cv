import type {FC} from "react";
import styles from "./ExperienceListItem.module.scss";
import {ExperienceDuration} from "../experience-duration/ExperienceDuration";
import {getExperiencePeriod} from "@/services/helpers";
import {
    ExperienceListItemAdditionalInfo
} from "@/components/experience-list-item-additional-info/ExperinceListItemAdditionalInfo";
import type {IExperience} from "@/types";

interface IProps {
    experience: IExperience
}

export const ExperienceListItem: FC<IProps> = ({experience}) => {
    return (
        <div className={styles.experience}>
            <div className={styles.role}>{experience.role}</div>
            <div className={styles.companyName}>{experience.company}</div>
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
