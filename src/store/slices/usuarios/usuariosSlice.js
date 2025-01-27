import { createSlice } from "@reduxjs/toolkit";

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    usuarios:[],
    usuario:{},
    actividades:[],
    examenesFinal:[],
  },
  reducers: {
    storeUsuarios: (state, {payload})=>{
      state.usuarios = payload;
    },
    storeUsuario:(state, {payload})=>{
      state.usuario = payload.usuario;
      state.actividades = payload.actividades;
      state.examenesFinal = payload.examenesFinal;
    },    
  },
});

export const {
  storeUsuarios,
  storeUsuario,
} = usuariosSlice.actions;