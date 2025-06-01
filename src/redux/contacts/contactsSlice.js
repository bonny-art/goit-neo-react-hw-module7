import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./contactsOps";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

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
        state.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
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
