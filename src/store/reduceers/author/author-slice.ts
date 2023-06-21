import { createSlice } from "@reduxjs/toolkit";
import { IAuthorSliceState, IExperiences } from "./types";

const EXPERIENCES: IExperiences[] = [
  {
    id: "egs",
    company: "Energize Global Services Armenia",
    year: { from: "2023 April", to: "Present" },
    role: "Frontend developer",
  },
  {
    id: "willing",
    company: "Willing and Able LLC",
    year: { from: "2020 December", to: "2023 April" },
    role: "Frontend developer",
  },
  {
    id: "compass_2",
    company: "Compass LLC",
    year: { from: "2019 August", to: "2020 September" },
    role: "Frontend developer",
  },
  {
    id: "compass_1",
    company: "Compass LLC",
    year: { from: "2017 July", to: "2019 August" },
    role: "Articulate Storyline developer",
  },
  {
    id: "stuyg",
    company: "Stuyg LLC",
    year: { from: "2014 April", to: "2016 October" },
    role: "Accountant",
    hide: true
  },
  {
    id: "mag",
    company: "M.A.G. Shinanyut LLC",
    year: { from: "2012 August", to: "2013 August" },
    role: "Accountant",
    hide: true
  },
];

const initialState: IAuthorSliceState = {
  name: "Hovhannes",
  last_name: "Keshishyan",
  birth: new Date("02/17/1991").toString(),
  experiences: EXPERIENCES,
  social: [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/hovhannes-keshishyan",
    },
    {
      name: "github",
      href: "https://github.com/Hovhannes1991",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/HovoKeshishyan",
    },
  ],
};

const authorSlice = createSlice({
  name: "author_slice",
  initialState,
  reducers: {},
});

// export const {} = authorSlice.actions;
export default authorSlice.reducer;
