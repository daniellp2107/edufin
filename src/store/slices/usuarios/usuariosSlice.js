import { createSlice } from "@reduxjs/toolkit";

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    usuarios:[],
  },
  reducers: {
    storeUsuarios: (state, {payload})=>{
      state.usuarios = payload;
    },
    
  },
});

export const {
  storeUsuarios,
} = usuariosSlice.actions;