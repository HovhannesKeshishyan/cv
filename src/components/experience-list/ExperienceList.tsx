import React from "react";
import styles from "./ExperienceList.module.scss";

const EXPERIENCES = [
  {
    id: 5,
    company: "Energize Global Services Armenia",
    year: { from: "2023 April", to: "Present" },
    role: "Frontend developer",
  },
  {
    id: 4,
    company: "Willing and Able LLC",
    year: { from: "2020 December", to: "2023 April" },
    role: "Frontend developer",
  },
  {
    id: 3,
    company: "Compass LLC",
    year: { from: "2017 July", to: "2020 September" },
    role: "Frontend developer",
  },
  {
    id: 2,
    company: "Stuyg LLC",
    year: { from: "2014 April", to: "2016 October" },
    role: "Accountant",
  },
  {
    id: 1,
    company: "M.A.G. Shinanyut LLC",
    year: { from: "2012 August", to: "2013 August" },
    role: "Accountant",
  },
];

export const ExperienceList: React.FC = () => {
  const experience_list = EXPERIENCES.map((experience) => {
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
