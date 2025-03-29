import {FC, useMemo} from "react";
import styles from "./SkillsList.module.scss";

import type {TImgSvgIconName} from "@/utils/img-svg-icon/ImgSvgIcon";
import {ImgSvgIcon} from "@/utils/img-svg-icon/ImgSvgIcon";
import {useSplitArrayToTwoParts} from "@/hooks/useSplitArraytoTwoParts";

interface ISkill {
    name: string;
    level: string;
    icon: TImgSvgIconName;
}

const SKILLS: ISkill[] = [
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
                <div className={styles.skillItem} key={skill.name}>
                    <ImgSvgIcon iconName={skill.icon} alt={`${skill.name} icon`}/>
                    <p className={styles.skillName}>{skill.name}</p>
                </div>
            );
        });
    }, []);

    const [firstColumnItems, secondColumnItems] =
        useSplitArrayToTwoParts(skillsList);

    return (
        <div className={styles.skillsList}>
            <h2 className="app-section-title">Skills</h2>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsListColumn}>{firstColumnItems}</div>
                <div className={styles.skillsListColumn}>{secondColumnItems}</div>
            </div>
        </div>
    );
};
