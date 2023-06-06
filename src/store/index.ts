import { configureStore } from "@reduxjs/toolkit";

import appMainReducer from "./reduceers/app-main-slice";
import authorReducer from "./reduceers/author-slice";

const store = configureStore({
  reducer: {
    app_main: appMainReducer,
    author: authorReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
