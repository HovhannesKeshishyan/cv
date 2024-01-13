import React, { useMemo } from "react";
import styles from "./SkillsList.module.scss";

import JavaScriptIcon from "@/assets/icons/skills/javascript.png";
import VueIcon from "@/assets/icons/skills/vue.png";
import ReactIcon from "@/assets/icons/skills/react.png";
import ReduxIcon from "@/assets/icons/skills/redux.png";
import NodejsIcon from "@/assets/icons/skills/nodejs.png";
import MongoDBIcon from "@/assets/icons/skills/mongodb.png";
import TypeScriptIcon from "@/assets/icons/skills/typescript.png";
import HTMLIcon from "@/assets/icons/skills/html.png";
import CSSIcon from "@/assets/icons/skills/css.png";
import SASSIcon from "@/assets/icons/skills/sass.png";
import LessIcon from "@/assets/icons/skills/less.png";
import GitIcon from "@/assets/icons/skills/git.png";
import PhotoshopIcon from "@/assets/icons/skills/photoshop.png";
import FigmaIcon from "@/assets/icons/skills/figma.png";
import ArticulateStorylineIcon from "@/assets/icons/skills/articulate_storyline.png";

import { useSplitArrayToTwoParts } from "../../hooks/useSplitArraytoTwoParts";

const SKILLS = [
  { name: "JavaScript", level: "", icon: JavaScriptIcon },
  { name: "Vue", level: "", icon: VueIcon },
  { name: "React", level: "", icon: ReactIcon },
  { name: "Redux", level: "", icon: ReduxIcon },
  { name: "Node.js", level: "", icon: NodejsIcon },
  { name: "MongoDB", level: "", icon: MongoDBIcon },
  { name: "TypeScript", level: "", icon: TypeScriptIcon },
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
