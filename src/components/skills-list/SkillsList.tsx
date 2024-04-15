import React, { useMemo } from "react";
import styles from "./SkillsList.module.scss";

import JavaScriptIcon from "@/assets/icons/skills/svg/JavaScript.svg";
import VueIcon from "@/assets/icons/skills/svg/Vue.svg";
import ReactIcon from "@/assets/icons/skills/svg/React.svg";
import ReduxIcon from "@/assets/icons/skills/svg/Redux.svg";
import NodejsIcon from "@/assets/icons/skills/svg/NodeJS.svg";
import MongoDBIcon from "@/assets/icons/skills/svg/MongoDB.svg";
import TypeScriptIcon from "@/assets/icons/skills/svg/TypeScript.svg";
import WebpackIcon from "@/assets/icons/skills/svg/Webpack.svg";
import HTMLIcon from "@/assets/icons/skills/svg/HTML.svg";
import CSSIcon from "@/assets/icons/skills/svg/CSS.svg";
import SASSIcon from "@/assets/icons/skills/svg/SASS.svg";
import LessIcon from "@/assets/icons/skills/svg/LESS.svg";
import GitIcon from "@/assets/icons/skills/svg/GIT.svg";
import PhotoshopIcon from "@/assets/icons/skills/svg/Photoshop.svg";
import FigmaIcon from "@/assets/icons/skills/svg/Figma.svg";
import ArticulateStorylineIcon from "@/assets/icons/skills/svg/ArticulateStoryline.svg";

import { useSplitArrayToTwoParts } from "../../hooks/useSplitArraytoTwoParts";

const SKILLS = [
  { name: "JavaScript", level: "", icon: JavaScriptIcon },
  { name: "Vue", level: "", icon: VueIcon },
  { name: "React", level: "", icon: ReactIcon },
  { name: "Redux", level: "", icon: ReduxIcon },
  { name: "Node.js", level: "", icon: NodejsIcon },
  { name: "MongoDB", level: "", icon: MongoDBIcon },
  { name: "TypeScript", level: "", icon: TypeScriptIcon },
  { name: "Webpack", level: "", icon: WebpackIcon },
  { name: "HTML", level: "", icon: HTMLIcon },
  { name: "CSS", level: "", icon: CSSIcon },
  { name: "SASS/SCSS", level: "", icon: SASSIcon },
  { name: "LESS", level: "", icon: LessIcon },
  { name: "GIT", level: "", icon: GitIcon },
  { name: "Photoshop", level: "", icon: PhotoshopIcon },
  { name: "Figma", level: "", icon: FigmaIcon },
  { name: "Articulate Storyline", level: "", icon: ArticulateStorylineIcon },
];

export const SkillsList: React.FC = () => {
  const skills_list = useMemo(() => {
    return SKILLS.map((skill) => {
      return (
        <div className={styles.skill_item} key={skill.name}>
          <img src={skill.icon} alt={`${skill.name} icon`} />
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
