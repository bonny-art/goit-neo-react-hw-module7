import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
