import {
  createAsyncThunk,
  createReducer,
  SerializedError,
} from "@reduxjs/toolkit";
import { AppConfig } from "../../constants";
import { appService } from "../../service";
import { Contact } from "../types";

interface ContactsState {
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  list: Contact[];
  error: SerializedError | null;
}

const initialState: ContactsState = {
  loading: "idle",
  list: [],
  error: null,
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchData",
  async (config: AppConfig) => {
    const response = await appService.fetchContacts(config);
    return response.results;
  }
);

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = "pending";
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = "fulfilled";
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error;
    });
});

export default contactsReducer;
