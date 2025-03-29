import {IconType} from "react-icons";

export interface IContacts {
    email: string;
    phone: string;
    phone_label?: string;
    address: string;
    googleMapAddress?: string;
}

export interface ISocialMedia {
    name: string;
    href: string;
    icon: IconType;
}

interface IProject {
    id: number;
    description: string;
}
export interface IExperience {
    id: string;
    company: string;
    year: { from: string; to: string };
    role: string;
    technologies: TTechnology[];
    projects: IProject[];
    hide?: boolean;
}


export type TTechnology = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "Vue" | "VUEX" | "Vue Router" | "React" | "Redux" | "Angular" | "Webpack" | "SASS" | "SCSS" | "LESS" | "Articulate Storyline";