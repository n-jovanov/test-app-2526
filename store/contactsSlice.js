import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createContact, deleteContact, getAllContacts } from "../firebase/firestore/contactsCRUD";

export const startContactsListener = () => (dispatch) => {
  const unsubscribe = getAllContacts((data) => {
    dispatch(setContacts(data));
  });

  return unsubscribe;
};

export const addContact = createAsyncThunk("contacts/addContact", async (contactData) => {
  await createContact(contactData);
});

export const removeContact = createAsyncThunk("contacts/removeContact", async (id) => {
  await deleteContact(id);
});

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
