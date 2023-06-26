import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globalSlice",
  initialState: {
    globalState: {
      isSidebarOpen: true,
      mobileSearchBar: false,
    },
  },
  reducers: {
    changeSidebarState: (state, action) => {
      state.globalState.isSidebarOpen = action.payload;
    },
    changeMobileSearchBarState: (state, action) => {
      state.globalState.mobileSearchBar = action.payload;
    },
  },
});
export const { changeSidebarState, changeMobileSearchBarState } =
  globalSlice.actions;
export default globalSlice.reducer;
