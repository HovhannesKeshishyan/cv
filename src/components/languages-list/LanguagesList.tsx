import React from "react";
import styles from "./LanguagesList.module.scss";

const LANGUAGES = [
  { language: "Armenian", level: "Native" },
  { language: "Russian", level: "Full proficiency" },
  { language: "English", level: "Advanced" },
];

export const LanguagesList: React.FC = () => {
  const languages_list = LANGUAGES.map((language) => {
    return (
      <div className={styles.language} key={language.language}>
        <p className={styles.language_name}>{language.language}</p>
        <p className={styles.language_level}>{language.level}</p>
      </div>
    );
  });
  return (
    <div className={styles.languages}>
      <h2 className="app-section-title">Languages</h2>
      {languages_list}
    </div>
  );
};
