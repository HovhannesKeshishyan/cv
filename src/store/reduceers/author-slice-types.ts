export interface ISocialMedia {
  name: string;
  href: string;
}

export interface IAuthorSliceState {
  name: string;
  last_name: string;
  birth: string;

  social: ISocialMedia[];
}
