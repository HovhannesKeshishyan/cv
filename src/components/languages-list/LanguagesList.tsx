import type {FC} from "react";
import styles from "./LanguagesList.module.scss";
import {LANGUAGES} from "@/data/languages";

export const LanguagesList: FC = () => {
    const languagesList = LANGUAGES.map((language) => {
        return (
            <li className={styles.language} key={language.language}>
                <h3 className={styles.languageName}>{language.language}</h3>
                <h3 className={styles.languageLevel}>{language.level}</h3>
            </li>
        );
    });
    return (
        <div className={styles.languages}>
            <h2 className="app-section-title">Languages</h2>
            <ul className={styles.languagesList}>{languagesList}</ul>
        </div>
    );
};
