import {TSvgIconName} from "@/utils/svg-icon/SvgIcon.tsx";

export interface IContacts {
  email: string;
  phone: string;
  phone_label?: string;
  address: string;
  address_google_map?: string;
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
  technologies: string[];
  projects: IProject[];
  hide?: boolean;
}

export interface IAuthorSliceState {
  name: string;
  last_name: string;
  birth: string;

  contacts: IContacts;

  experiences: IExperience[];

  social: ISocialMedia[];
}
