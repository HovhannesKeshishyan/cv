import { createSlice } from "@reduxjs/toolkit";
import { IAuthorSliceState } from "./author-slice-types";

const initialState: IAuthorSliceState = {
  name: "Hovhannes",
  last_name: "Keshishyan",
  birth: new Date("02/17/1991"),
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
