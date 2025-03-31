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
                        <h3 className={styles.sectionTitle}>Technologies</h3>
                        <p>
                            {experience.technologies.join(", ")}
                        </p>
                    </div> : null
                }

                {
                    experience.projects?.length ? <div className={styles.projects}>
                        <h3 className={styles.sectionTitle}>Projects</h3>
                        <ul>
                            {experience.projects.map((project, index) => {
                                return <li key={project.id}>{`${index + 1}) ${project.description}`}</li>
                            })}
                        </ul>
                    </div> : null
                }
            </div>
        </div>
    )
};
