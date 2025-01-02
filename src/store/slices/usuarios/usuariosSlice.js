import { createSlice } from "@reduxjs/toolkit";

export const contenidosSlice = createSlice({
  name: "contenidos",
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
} = contenidosSlice.actions;