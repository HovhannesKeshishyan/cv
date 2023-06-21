import React from "react";
import styles from "./ExperienceList.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const ExperienceList: React.FC = () => {
  let experiences = useTypedSelector((state) => state.author.experiences);
  experiences = experiences.filter((experience) => !experience.hide);

  const experience_list = experiences.map((experience) => {
    return (
      <div className={styles.experience} key={experience.id}>
        <div className={styles.role}>{experience.role}</div>
        <div className={styles.company_name}>{experience.company}</div>
        <div
          className={styles.year}
        >{`${experience.year.from} - ${experience.year.to}`}</div>
      </div>
    );
  });
  return (
    <div className={styles.experiences}>
      <h2 className="app-section-title">Experience</h2>
      {experience_list}
    </div>
  );
};
