import {type FC, useMemo} from "react";

import type {ImgSvgIconName} from "@/utils/img-svg-icon/ImgSvgIcon";
import {ImgSvgIcon} from "@/utils/img-svg-icon/ImgSvgIcon";

import styles from "./SkillsList.module.scss";

interface Skill {
    name: string;
    level: string;
    icon: ImgSvgIconName;
}

const SKILLS: Skill[] = [
    {name: "JavaScript", level: "", icon: "javascript"},
    {name: "TypeScript", level: "", icon: "typescript"},
    {name: "Vue", level: "", icon: "vue"},
    {name: "React", level: "", icon: "react"},
    {name: "Redux", level: "", icon: "redux"},
    {name: "Node.js", level: "", icon: "nodejs"},
    {name: "MongoDB", level: "", icon: "mongodb"},
    {name: "Webpack", level: "", icon: "webpack"},
    {name: "HTML", level: "", icon: "html"},
    {name: "CSS", level: "", icon: "css"},
    {name: "SASS/SCSS", level: "", icon: "sass"},
    {name: "LESS", level: "", icon: "less"},
    {name: "GIT", level: "", icon: "git"},
    {name: "Figma", level: "", icon: "figma"},
];

export const SkillsList: FC = () => {
    const skillsList = useMemo(() => {
        return SKILLS.map((skill) => {
            return (
                <li className={styles.skillItem} key={skill.name}>
                    <ImgSvgIcon iconName={skill.icon} alt={`${skill.name} icon`}/>
                    <h3 className={styles.skillName}>{skill.name}</h3>
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
