import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
