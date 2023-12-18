import { createSlice } from "@reduxjs/toolkit";

import { UserInfo } from "../../models";
import { clearLocalStorage, setAndPersistLocalStorage } from "../../utilities";

export const EmpyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",

  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmpyUserState,

  reducers: {
    createUser: (state, action) => {
      setAndPersistLocalStorage<UserInfo>("user", action.payload);

      return action.payload;
    },

    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };

      setAndPersistLocalStorage<UserInfo>("user", result);

      return result;
    },

    resetUser: () => {
      clearLocalStorage("user");

      return EmpyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
