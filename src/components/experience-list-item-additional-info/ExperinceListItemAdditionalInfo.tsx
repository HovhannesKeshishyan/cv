import React, {useState} from "react";
import styles from "./ExperienceListItemAdditionalInfo.module.scss";
import {IExperience} from "@/store/reduceers/author/types.ts";
import {SvgIcon} from "@/utils/svg-icon/SvgIcon.tsx";

interface IProps {
    experience: IExperience;
}

export const ExperienceListItemAdditionalInfo: React.FC<IProps> = ({experience}) => {
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
                <SvgIcon iconName="toggle_arrow"/>
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
