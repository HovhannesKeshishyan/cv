import React, { useMemo } from "react";
import styles from "./SkillsList.module.scss";

import type { TSvgIconName } from "@/utils/img-svg-icon/ImgSvgIcon";
import { ImgSvgIcon } from "@/utils/img-svg-icon/ImgSvgIcon";
import { useSplitArrayToTwoParts } from "../../hooks/useSplitArraytoTwoParts";

interface ISkill {
  name: string;
  level: string;
  icon: TSvgIconName;
}

const SKILLS: ISkill[] = [
  { name: "JavaScript", level: "", icon: "javascript" },
  { name: "Vue", level: "", icon: "vue" },
  { name: "React", level: "", icon: "react" },
  { name: "Redux", level: "", icon: "redux" },
  { name: "Node.js", level: "", icon: "nodejs" },
  { name: "MongoDB", level: "", icon: "mongodb" },
  { name: "TypeScript", level: "", icon: "typescript" },
  { name: "Webpack", level: "", icon: "webpack" },
  { name: "HTML", level: "", icon: "html" },
  { name: "CSS", level: "", icon: "css" },
  { name: "SASS/SCSS", level: "", icon: "sass" },
  { name: "LESS", level: "", icon: "less" },
  { name: "GIT", level: "", icon: "git" },
  { name: "Photoshop", level: "", icon: "photoshop" },
  { name: "Figma", level: "", icon: "figma" },
  { name: "Articulate Storyline", level: "", icon: "articulate_storyline" },
];

export const SkillsList: React.FC = () => {
  const skills_list = useMemo(() => {
    return SKILLS.map((skill) => {
      return (
        <div className={styles.skill_item} key={skill.name}>
          <ImgSvgIcon icon_name={skill.icon} alt={`${skill.name} icon`} />
          <p className={styles.skill_name}>{skill.name}</p>
        </div>
      );
    });
  }, []);

  const [first_column_items, second_column_items] =
    useSplitArrayToTwoParts(skills_list);

  return (
    <div className={styles.skills_list}>
      <h2 className="app-section-title">Skills</h2>
      <div className={styles.skills_container}>
        <div className={styles.skills_list_column}>{first_column_items}</div>
        <div className={styles.skills_list_column}>{second_column_items}</div>
      </div>
    </div>
  );
};
