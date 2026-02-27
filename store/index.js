import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    counter: counterReducer,
  },
});