import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
