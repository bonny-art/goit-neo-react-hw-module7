import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "../../api/mockapi";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (id, { rejectWithValue }) => {
    try {
      return await getContacts(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      return await getContacts(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
