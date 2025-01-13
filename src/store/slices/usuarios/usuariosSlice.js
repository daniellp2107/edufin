import { createSlice } from "@reduxjs/toolkit";

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    usuarios:[],
    usuario:{},
  },
  reducers: {
    storeUsuarios: (state, {payload})=>{
      state.usuarios = payload;
    },
    storeUsuario:(state, {payload})=>{
      state.usuario = payload;
    },
  },
});

export const {
  storeUsuarios,
  storeUsuario,
} = usuariosSlice.actions;