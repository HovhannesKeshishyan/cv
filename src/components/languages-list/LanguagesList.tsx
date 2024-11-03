import {FC} from "react";
import styles from "./LanguagesList.module.scss";

const LANGUAGES = [
  { language: "Armenian", level: "Native" },
  { language: "Russian", level: "Full proficiency" },
  { language: "English", level: "Advanced" },
];

export const LanguagesList: FC = () => {
  const languagesList = LANGUAGES.map((language) => {
    return (
      <div className={styles.language} key={language.language}>
        <p className={styles.languageName}>{language.language}</p>
        <p className={styles.languageLevel}>{language.level}</p>
      </div>
    );
  });
  return (
    <div className={styles.languages}>
      <h2 className="app-section-title">Languages</h2>
      {languagesList}
    </div>
  );
};
