import React from "react";
import styles from "./MainContainer.module.scss";
import { ContactsList } from "../contacts-list/ContactsList";
import { SeparatorLine } from "@/utils/separator-line/SeparatorLine.tsx";
import { EducationInfo } from "../education-info/EducationInfo.tsx";
import { TwoColumns } from "../../utils/the-columns/TwoColumns";
import { ExperienceList } from "../experience-list/ExperienceList";
import { LanguagesList } from "../languages-list/LanguagesList";
import { SkillsList } from "../skills-list/SkillsList";

export const MainContainer: React.FC = () => {
  return (
    <main className={styles.main}>
      <SeparatorLine />

      <TwoColumns>
        <ContactsList />
        <EducationInfo />
      </TwoColumns>

      <SeparatorLine />

      <TwoColumns columnsBreakpoint={600}>
        <ExperienceList />
        <LanguagesList />
      </TwoColumns>

      <SeparatorLine />

      <SkillsList />

      <SeparatorLine />
    </main>
  );
};
