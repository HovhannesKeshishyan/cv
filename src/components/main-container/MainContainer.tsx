"use client"
import type {FC} from "react";

import {useTheme} from "next-themes";

import {ContactsList} from "@/components/contacts-list/ContactsList";
import {EducationInfo} from "@/components/education-info/EducationInfo";
import {ExperienceList} from "@/components/experience-list/ExperienceList";
import {LanguagesList} from "@/components/languages-list/LanguagesList";
import {SkillsList} from "@/components/skills-list/SkillsList";

import {SwitchButton} from "@/utils/switch-button/SwitchButton";
import {SeparatorLine} from "@/utils/separator-line/SeparatorLine";
import {TwoColumns} from "@/utils/the-columns/TwoColumns";

import styles from "./MainContainer.module.scss";

export const MainContainer: FC = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        const newValue = theme === "dark" ? "light" : "dark";
        setTheme(newValue);
    }

    return (
        <main className={styles.main}>
            <SwitchButton theme={theme} toggleTheme={toggleTheme}/>

            <SeparatorLine/>

            <TwoColumns>
                <ContactsList/>
                <EducationInfo/>
            </TwoColumns>

            <SeparatorLine/>

            <TwoColumns columnsBreakpoint={600}>
                <ExperienceList/>
                <LanguagesList/>
            </TwoColumns>

            <SeparatorLine/>

            <SkillsList/>

            <SeparatorLine/>
        </main>
    );
};
