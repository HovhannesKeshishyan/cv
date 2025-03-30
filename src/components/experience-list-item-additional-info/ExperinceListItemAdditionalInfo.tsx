import {type FC, useState} from "react";

import {FaChevronDown} from "react-icons/fa";

import styles from "./ExperienceListItemAdditionalInfo.module.scss";
import type {Experience} from "@/types";

interface Props {
    experience: Experience;
}

export const ExperienceListItemAdditionalInfo: FC<Props> = ({experience}) => {
    const [opened, setOpened] = useState(false);

    const toggleAdditionalInfo = () => {
        setOpened(prev => !prev);
    }

    let className = styles.experienceItemAdditionalInfo + " ";
    if (opened) className += styles.opened;

    return (
        <div className={className}>
            <span onClick={toggleAdditionalInfo} className={styles.additionalInfoTitle}>
                <span>Show More Information</span>
               <FaChevronDown/>
            </span>

            <div className={styles.additionalInfoContent}>
                {experience.technologies?.length ?
                    <div>
                        <p className={styles.sectionTitle}>Technologies</p>
                        <p>
                            {experience.technologies.join(", ")}
                        </p>
                    </div> : null
                }

                {
                    experience.projects?.length ? <div className={styles.projects}>
                        <p className={styles.sectionTitle}>Projects</p>
                        {experience.projects.map((project, index) => {
                            return <p key={project.id}>{`${index + 1}) ${project.description}`}</p>
                        })}
                    </div> : null
                }
            </div>
        </div>
    )
};
