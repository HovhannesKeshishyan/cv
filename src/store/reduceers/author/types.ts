import {TSvgIconName} from "@/utils/svg-icon/SvgIcon.tsx";

export interface IContacts {
  email: string;
  phone: string;
  phone_label?: string;
  address: string;
  googleMapAddress?: string;
}

export interface ISocialMedia {
  name: TSvgIconName;
  href: string;
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

export interface IAuthorSliceState {
  name: string;
  lastName: string;
  birth: string;

  contacts: IContacts;

  experiences: IExperience[];

  social: ISocialMedia[];
}


export type TTechnology = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "Vue" | "VUEX" | "Vue Router" | "React" | "Redux" | "Angular" | "Webpack" | "SASS" | "SCSS" | "LESS" | "Articulate Storyline"