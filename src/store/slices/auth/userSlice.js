import { createSlice } from "@reduxjs/toolkit";
import { consLogged } from "../../../const/consLogged";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    logged: consLogged.NOTLOGGED,
    loginErr: null,
    loadingLogin: false,
    user: {
      nombre: "Patrik Reyes",
    },
    backendVer: "---",
  },
  reducers: {
    storeBackendVer: (state, { payload }) => {
      state.backendVer = payload;
    },
    setLoginErr: (state, action) => {
      state.loginErr = action.payload;
      state.loadingLogin = false;
    },
    setLoadingLogin: (state) => {
      state.loadingLogin = true;
    },
    setLogged: (state, { payload }) => {
      state.logged = payload;
    },
    storeUser: (state, { payload }) => {
      state.user = payload;
      state.loadingLogin = false;
      state.logged = consLogged.LOGGED;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.logged = consLogged.NOTLOGGED;
    },
  },
});

export const {
  storeBackendVer,
  setLoginErr,
  setLoadingLogin,
  setLogged,
  storeUser,
  logOut,
} = userSlice.actions;
