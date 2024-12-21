import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showMainSections: true,
    searchActive: false,
  },
  reducers: {
    hideMainSections: (state) => {
      state.showMainSections = false;
    },
    showMainSections: (state) => {
      state.showMainSections = true;
    },
    activateSearch: (state) => {
      state.searchActive = true;
    },
    deactivateSearch: (state) => {
      state.searchActive = false;
    },
    resetMainSections: (state) => {
      state.showMainSections = true;
    },
  },
});

export const {
  hideMainSections,
  showMainSections,
  activateSearch,
  deactivateSearch,
  resetMainSections,
} = uiSlice.actions;
export default uiSlice.reducer;
