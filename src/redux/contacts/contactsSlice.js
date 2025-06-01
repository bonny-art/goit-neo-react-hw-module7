import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items.filter(({ id }) => id !== payload);
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
