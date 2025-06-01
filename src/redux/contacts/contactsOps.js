import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContactById, getContacts, postContact } from "../../api/mockapi";

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
  async (data, { rejectWithValue }) => {
    try {
      return await postContact(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContactById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
