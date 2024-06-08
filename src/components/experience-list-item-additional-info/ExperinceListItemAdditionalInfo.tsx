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

    let class_name = styles.experience_item_additional_info + " ";
    if (opened) class_name += styles.opened;

    return (
        <div className={class_name}>
            <span onClick={toggleAdditionalInfo} className={styles.additional_info_title}>
                <span>Show More Information</span>
                <SvgIcon icon_name="toggle_arrow"/>
            </span>

            <div className={styles.additional_info_content}>
                {experience.technologies?.length ?
                    <div>
                        <p className={styles.section_title}>Technologies</p>
                        <p>
                            {experience.technologies.join(", ")}
                        </p>
                    </div> : null
                }

                {
                    experience.projects?.length ? <div className={styles.projects}>
                        <p className={styles.section_title}>Projects</p>
                        {experience.projects.map((project, index) => {
                            return <p key={project.id}>{`${index + 1}) ${project.description}`}</p>
                        })}
                    </div> : null
                }
            </div>
        </div>
    )
};
