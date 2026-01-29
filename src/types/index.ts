import type {IconType} from "react-icons";

export interface Contacts {
    email: string;
    phone: string;
    address: string;
    googleMapAddress: string;
}

export interface SocialMedia {
    name: string;
    href: string;
    icon: IconType;
}

interface Project {
    id: number;
    description: string;
}

export interface Experience {
    id: string;
    company: string;
    duration: { from: string; to: string };
    role: string;
    technologies: Technology[];
    projects: Project[];
    hide?: boolean;
}


export type Technology =
    "HTML"
    | "CSS"
    | "JavaScript"
    | "TypeScript"
    | "Vue"
    | "VUEX"
    | "Vue Router"
    | "React"
    | "Redux"
    | "Angular"
    | "Webpack"
    | "SASS"
    | "SCSS"
    | "LESS"
    | "Articulate Storyline";