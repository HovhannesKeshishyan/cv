import { createSlice } from "@reduxjs/toolkit";
import { IAuthorSliceState, IExperiences } from "./types";

const EXPERIENCES: IExperiences[] = [
  {
    id: "egs",
    company: "Energize Global Services Armenia",
    year: { from: "2023-04-17", to: "Present" },
    role: "Frontend developer",
  },
  {
    id: "willing",
    company: "Willing and Able LLC",
    year: { from: "2020-12-09", to: "2023-04-14" },
    role: "Frontend developer",
  },
  {
    id: "compass_2",
    company: "Compass LLC",
    year: { from: "2019-08-01", to: "2020-09-01" },
    role: "Frontend developer",
  },
  {
    id: "compass_1",
    company: "Compass LLC",
    year: { from: "2017-08-01", to: "2019-08-01" },
    role: "Articulate Storyline developer",
  },
  {
    id: "stuyg",
    company: "Stuyg LLC",
    year: { from: "2014-04-01", to: "2016-10-01" },
    role: "Accountant",
    hide: true
  },
  {
    id: "mag",
    company: "M.A.G. Shinanyut LLC",
    year: { from: "2012-08-01", to: "2013-08-01" },
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
