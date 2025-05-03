import {type FC, useMemo} from "react";

import {ImgSvgIcon} from "@/utils/img-svg-icon/ImgSvgIcon";

import styles from "./SkillsList.module.scss";

import {SKILLS_LIST} from "@/components/skills-list/resources/skillsList";

export const SkillsList: FC = () => {
    const skillsList = useMemo(() => {
        return SKILLS_LIST.map((skill) => {
            return (
                <li className={styles.skillItem} key={skill.name}>
                    <a href={skill.officialPageUrl} target="_blank" rel="noopener noreferrer">
                        <ImgSvgIcon iconName={skill.icon} alt={`${skill.name} icon`}/>
                        <h3 className={styles.skillName}>{skill.name}</h3>
                    </a>
                </li>
            );
        });
    }, []);

    return (
        <div className={styles.skillsList}>
            <h2 className="app-section-title">Skills</h2>
            <ul className={styles.skillsContainer}>
                {skillsList}
            </ul>
        </div>
    );
};
