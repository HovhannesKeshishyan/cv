import { configureStore } from "@reduxjs/toolkit";

import appMainReducer from "./reduceers/app-main-slice";

const store = configureStore({
  reducer: {
    app_main: appMainReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
