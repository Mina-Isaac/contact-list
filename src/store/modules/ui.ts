import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../types";

interface UIState {
  selectedTab: string;
  selectedContact: Contact | undefined;
}

const initialState: UIState = {
  selectedTab: "a",
  selectedContact: undefined,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<UIState["selectedTab"]>) => {
      state.selectedTab = action.payload;
    },
    setSelectedContact: (
      state,
      action: PayloadAction<UIState["selectedContact"]>
    ) => {
      state.selectedContact = action.payload;
    },
  },
});

export const { setSelectedTab, setSelectedContact } = uiSlice.actions;

export default uiSlice.reducer;
