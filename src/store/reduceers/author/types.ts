export interface ISocialMedia {
  name: string;
  href: string;
}

export interface IExperiences {
  id: string;
  company: string;
  year: { from: string; to: string };
  role: string;
  hide?: boolean;
}

export interface IAuthorSliceState {
  name: string;
  last_name: string;
  birth: string;
  experiences: IExperiences[];

  social: ISocialMedia[];
}
