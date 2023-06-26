import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./projectsSlice";
import globalSlice from "./globalSlice";

const store = configureStore({
  reducer: {
    projectsSlice: projectsSlice,
    globalSlice: globalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
