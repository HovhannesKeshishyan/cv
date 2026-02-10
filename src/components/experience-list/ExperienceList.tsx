import type {FC} from "react";
import {ExperienceListItem} from "./experience-list-item/ExperinceListItem";
import {EXPERIENCES} from "@/data/experiences";

export const ExperienceList: FC = () => {
    const experiences = EXPERIENCES.filter((experience) => !experience.hide);

    return (
        <div>
            <h2 className="app-section-title">Experience</h2>
            {experiences.map(experience => <ExperienceListItem experience={experience} key={experience.id}/>)}
        </div>
    );
};
