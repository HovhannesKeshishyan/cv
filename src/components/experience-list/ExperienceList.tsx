import {FC} from "react";
import {useTypedSelector} from "@/hooks/useTypedSelector.ts";
import {ExperienceListItem} from "@/components/experience-list-item/ExperinceListItem.tsx";


export const ExperienceList: FC = () => {
    let experiences = useTypedSelector((state) => state.author.experiences);
    experiences = experiences.filter((experience) => !experience.hide);

    return (
        <div>
            <h2 className="app-section-title">Experience</h2>
            {experiences.map(experience => <ExperienceListItem experience={experience} key={experience.id}/>)}
        </div>
    );
};
