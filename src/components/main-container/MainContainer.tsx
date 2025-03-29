"use client"

import React from "react";
import styles from "./MainContainer.module.scss";
import {ContactsList} from "../contacts-list/ContactsList";
import {SeparatorLine} from "@/utils/separator-line/SeparatorLine";
import {EducationInfo} from "@/components/education-info/EducationInfo";
import {TwoColumns} from "@/utils/the-columns/TwoColumns";
import {ExperienceList} from "@/components/experience-list/ExperienceList";
import {LanguagesList} from "@/components/languages-list/LanguagesList";
import {SkillsList} from "@/components/skills-list/SkillsList";

export const MainContainer: React.FC = () => {
    return (
        <main className={styles.main}>
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
